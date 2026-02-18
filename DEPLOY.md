# Deploy do Backend NestJS no Google Cloud Run

Este guia descreve como fazer o deploy da aplicação NestJS no Google Cloud Run.

## Pré-requisitos

1.  Ter o `gcloud` instalado e autenticado (`gcloud auth login`).
2.  Ter um projeto no Google Cloud selecionado.
3.  Ter um banco de dados PostgreSQL acessível (Cloud SQL, Neon, Supabase, etc.).

## Passos para Deploy

### 1. Habilitar APIs necessárias

Habilite as APIs do Artifact Registry e Cloud Run:

```bash
gcloud services enable artifactregistry.googleapis.com run.googleapis.com cloudbuild.googleapis.com
```

### 2. Criar Repositório no Artifact Registry

Crie um repositório para armazenar as imagens Docker:

```bash
gcloud artifacts repositories create reflexao-backend-repo \
    --repository-format=docker \
    --location=us-central1 \
    --description="Repositório Docker para o Backend"
```

### 3. Build e Push da Imagem

Submeta o build para o Cloud Build, que irá construir a imagem e salvar no Artifact Registry:

```bash
# Substitua SEU_PROJECT_ID pelo ID do seu projeto (ex: project-2abcd256-ad78-44ef-bfa)
gcloud builds submit --tag us-central1-docker.pkg.dev/SEU_PROJECT_ID/reflexao-backend-repo/reflexao-diaria-backend:latest .
```

### 4. Deploy no Cloud Run

Faça o deploy da imagem para o Cloud Run. Você precisará definir as variáveis de ambiente para o banco de dados.

**Exemplo com banco de dados externo (Neon, Supabase, RDS, etc):**

```bash
gcloud run deploy reflexao-diaria-api \
    --image us-central1-docker.pkg.dev/SEU_PROJECT_ID/reflexao-backend-repo/reflexao-diaria-backend:latest \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated \
    --set-env-vars="DATABASE_HOST=seu-host-db,DATABASE_PORT=5432,DATABASE_USER=seu-user,DATABASE_PASSWORD=sua-senha,DATABASE_NAME=seu-db,NODE_ENV=production,JWT_SECRET=seu-jwt-secret"
```

**Exemplo com Cloud SQL:**

Se estiver usando Cloud SQL, adicione a flag `--add-cloudsql-instances` e configure o host com o socket unix:

```bash
gcloud run deploy reflexao-diaria-api \
    --image us-central1-docker.pkg.dev/SEU_PROJECT_ID/reflexao-backend-repo/reflexao-diaria-backend:latest \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated \
    --add-cloudsql-instances=SEU_PROJECT_ID:us-central1:SUA_INSTANCIA \
    --set-env-vars="DATABASE_HOST=/cloudsql/SEU_PROJECT_ID:us-central1:SUA_INSTANCIA,DATABASE_USER=seu-user,DATABASE_PASSWORD=sua-senha,DATABASE_NAME=seu-db,NODE_ENV=production,JWT_SECRET=seu-jwt-secret"
```

## Monitoramento

Após o deploy, você receberá uma URL (ex: `https://reflexao-diaria-api-xyz.a.run.app`).
Acesse `https://reflexao-diaria-api-xyz.a.run.app/api/docs` para ver o Swagger.
