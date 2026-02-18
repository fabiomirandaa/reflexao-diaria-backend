#!/bin/bash
set -e

echo "🛠️  Configuração do Cloud SQL (PostgreSQL)"
echo "⚠️  Atenção: O Cloud SQL tem custos associados (aprox $10-15/mês para db-f1-micro em execução contínua)."
echo "   Recomendamos desligar a instância quando não estiver usando para economizar."
read -p "Deseja criar a instância do Cloud SQL agora? (y/N) " CONFIRM
if [[ "$CONFIRM" != "y" ]]; then
    echo "Operação cancelada."
    exit 0
fi

INSTANCE_NAME="reflexao-db-instance-$(date +%s)" # Nome único
REGION="us-central1"
DB_NAME="reflexao_db"
DB_USER="reflexao_user"

echo "🔑 Digite uma senha forte para o banco de dados:"
read -s DB_PASS
echo ""

# Habilitar API
echo "🔧 Habilitando API do Cloud SQL Admin..."
gcloud services enable sqladmin.googleapis.com

# Criar Instância
echo "⏳ Criando instância do Cloud SQL (ISSO VAI DEMORAR DE 10 A 15 MINUTOS - NÃO CANCELE)..."
gcloud sql instances create $INSTANCE_NAME \
    --database-version=POSTGRES_15 \
    --tier=db-f1-micro \
    --region=$REGION \
    --root-password=$DB_PASS

# Criar Banco
echo "📦 Criando banco de dados '$DB_NAME'..."
gcloud sql databases create $DB_NAME --instance=$INSTANCE_NAME

# Criar Usuário
echo "👤 Criando usuário '$DB_USER'..."
gcloud sql users create $DB_USER \
    --instance=$INSTANCE_NAME \
    --password=$DB_PASS

# Connection Name
CONNECTION_NAME=$(gcloud sql instances describe $INSTANCE_NAME --format="value(connectionName)")

echo ""
echo "✅ Banco de dados criado com sucesso!"
echo "--------------------------------------------------------"
echo "📝 USE ESTES DADOS NO SCRIPT DE DEPLOY:"
echo "--------------------------------------------------------"
echo "Database Host: /cloudsql/$CONNECTION_NAME"
echo "Database Port: 5432"
echo "Database User: $DB_USER"
echo "Database Password: **** (a senha que você definiu)"
echo "Database Name: $DB_NAME"
echo "--------------------------------------------------------"
echo "💡 Dica: Copie o 'Database Host' acima, você vai precisar dele."
