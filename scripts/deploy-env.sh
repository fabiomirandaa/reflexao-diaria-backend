#!/bin/bash
set -e

# Carregar variáveis do .env se existir
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
    echo "✅ Carregando configurações do .env..."
else
    echo "⚠️ .env não encontrado!"
    exit 1
fi

PROJECT_ID=$(gcloud config get-value project)
REGION="us-central1"
SERVICE_NAME="reflexao-diaria-api"
IMAGE_NAME="reflexao-diaria-backend"
REPO_NAME="reflexao-backend-repo"
IMAGE_TAG="$REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME:latest"

echo "🚀 Iniciando deploy automático usando .env..."
echo "HOST: $DATABASE_HOST"
echo "USER: $DATABASE_USER"
echo "DB:   $DATABASE_NAME"

# Verificar/Criar Repositório no Artifact Registry
echo "📦 Verificando repositório no Artifact Registry..."
if ! gcloud artifacts repositories describe $REPO_NAME --location=$REGION > /dev/null 2>&1; then
    echo "📦 Criando repositório '$REPO_NAME'..."
    gcloud artifacts repositories create $REPO_NAME \
        --repository-format=docker \
        --location=$REGION \
        --description="Repositório Docker para o Backend"
else
    echo "✅ Repositório '$REPO_NAME' já existe."
fi

# Build (opcional, só se não tiver feito ainda)
read -p "Deseja fazer o build novamente? (y/N) " BUILD_CONFIRM
if [[ "$BUILD_CONFIRM" == "y" ]]; then
    gcloud builds submit --tag $IMAGE_TAG .
fi

# Deploy
gcloud run deploy $SERVICE_NAME \
    --image $IMAGE_TAG \
    --platform managed \
    --region $REGION \
    --allow-unauthenticated \
    --timeout 300s \
    --set-env-vars="DATABASE_HOST=$DATABASE_HOST,DATABASE_PORT=$DATABASE_PORT,DATABASE_USER=$DATABASE_USER,DATABASE_PASSWORD=$DATABASE_PASSWORD,DATABASE_NAME=$DATABASE_NAME,DATABASE_SSL=true,NODE_ENV=production,JWT_SECRET=$JWT_SECRET"

echo "✅ Deploy concluído!"
