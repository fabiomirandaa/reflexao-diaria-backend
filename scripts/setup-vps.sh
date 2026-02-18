#!/bin/bash
set -e

# Configurações do VPS
echo "--- PREPARAÇÃO DO VPS (Ubuntu/Debian) ---"
echo "OBS: Rode isso DENTRO do seu VPS (via SSH)!"

echo "1. Atualizando sistema..."
sudo apt-get update && sudo apt-get install -y git curl

echo "2. Instalando Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    rm get-docker.sh
    # Adicionar usuário atual ao grupo docker (requer relogin, mas vamos usar sudo)
    sudo usermod -aG docker $USER || true
else
    echo "Docker já instalado."
fi

echo "3. Preparando diretório..."
APP_DIR=~/reflexao-diaria-app
mkdir -p $APP_DIR
cd $APP_DIR

echo "4. Você deve agora clonar o repositório ou copiar os arquivos para cá."
echo "   Exemplo: git clone https://seu-token@github.com/seu-usuario/seu-repo.git ."
echo "   OU copie via SCP: scp -r meu-projeto usuario@ip-do-vps:$APP_DIR"

echo "5. Crie o arquivo .env com suas configurações de produção:"
echo "   nano .env"
echo "   (Cole o conteúdo do seu .env local, ajustando host do banco se necessário)"

echo "6. Rode a aplicação com Docker Compose:"
echo "   docker compose -f docker-compose.prod.yml up -d --build"

echo "--- FIM DAS INSTRUÇÕES ---"
