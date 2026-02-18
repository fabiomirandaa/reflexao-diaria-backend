#!/bin/bash
set -e

echo "🚀 Iniciando deploy do Backend NestJS para o Google Cloud Run..."

# 1. Configurações Iniciais
PROJECT_ID=$(gcloud config get-value project)
REGION="us-central1"
REPO_NAME="reflexao-backend-repo"
IMAGE_NAME="reflexao-diaria-backend"
SERVICE_NAME="reflexao-diaria-api"

echo "📍 Projeto: $PROJECT_ID"
echo "📍 Região: $REGION"

# 2. Habilitar APIs
echo "🔧 Habilitando APIs necessárias..."
gcloud services enable artifactregistry.googleapis.com run.googleapis.com cloudbuild.googleapis.com

# 3. Criar Artifact Registry (se não existir)
if ! gcloud artifacts repositories describe $REPO_NAME --location=$REGION > /dev/null 2>&1; then
    echo "📦 Criando repositório no Artifact Registry..."
    gcloud artifacts repositories create $REPO_NAME \
        --repository-format=docker \
        --location=$REGION \
        --description="Repositório Docker para o Backend"
else
    echo "📦 Repositório já existe."
fi

# 4. Build e Push da Imagem
IMAGE_TAG="$REGION-docker.pkg.dev/$PROJECT_ID/$REPO_NAME/$IMAGE_NAME:latest"
echo "🏗️ Construindo e enviando imagem Docker: $IMAGE_TAG"
gcloud builds submit --tag $IMAGE_TAG .

# 5. Configurar Variáveis de Ambiente
echo "⚠️  Configuração do Banco de Dados:"
read -p "Database Host (ex: IP ou /cloudsql/connection-name): " DB_HOST
read -p "Database Port (padrão: 5432): " DB_PORT
DB_PORT=${DB_PORT:-5432}
read -p "Database User: " DB_USER
read -s -p "Database Password: " DB_PASS
echo ""
read -p "Database Name: " DB_NAME
read -s -p "JWT Secret (para autenticação): " JWT_SECRET
echo ""

# 6. Deploy no Cloud Run
echo "🚀 Fazendo deploy no Cloud Run..."

# Se usar Cloud SQL (caminho começa com /cloudsql/), adiciona a flag --add-cloudsql-instances
CLOUDSQL_FLAG=""
if [[ "$DB_HOST" == /cloudsql/* ]]; then
    INSTANCE_CONNECTION_NAME=${DB_HOST#"/cloudsql/"}
    CLOUDSQL_FLAG="--add-cloudsql-instances=$INSTANCE_CONNECTION_NAME"
    echo "☁️ Configurando conexão Cloud SQL: $INSTANCE_CONNECTION_NAME"
fi

gcloud run deploy $SERVICE_NAME \
    --image $IMAGE_TAG \
    --platform managed \
    --region $REGION \
    --allow-unauthenticated \
    --set-env-vars="DATABASE_HOST=$DB_HOST,DATABASE_PORT=$DB_PORT,DATABASE_USER=$DB_USER,DATABASE_PASSWORD=$DB_PASS,DATABASE_NAME=$DB_NAME,NODE_ENV=production,JWT_SECRET=$JWT_SECRET" \
    $CLOUDSQL_FLAG

echo "✅ Deploy concluído com sucesso!"
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format 'value(status.url)')
echo "🌐 Acesse a API em: $SERVICE_URL"
echo "📚 Documentação Swagger: $SERVICE_URL/api/docs"
