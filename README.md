# Sabedoria Diária — Backend

Backend RESTful desenvolvido com **NestJS** para a aplicação "Sabedoria Diária" (Reflexão Diária), um PWA focado em saúde mental e espiritualidade cristã.

## 🚀 Tecnologias

-   **Framework:** [NestJS](https://nestjs.com/) (Node.js + TypeScript)
-   **Banco de Dados:** PostgreSQL 15
-   **ORM:** [TypeORM](https://typeorm.io/)
-   **Autenticação:** JWT (Access Token + Refresh Token)
-   **Documentação:** Swagger (OpenAPI)
-   **Containerização:** Docker & Docker Compose
-   **Validação:** class-validator + class-transformer

---

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

-   [Node.js](https://nodejs.org/) (v18 ou superior)
-   [Docker](https://www.docker.com/) & Docker Compose
-   [NPM](https://www.npmjs.com/)

---

## 📦 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd reflexao-diaria-backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configuração de Variáveis de Ambiente

O projeto já vem com um arquivo `.env` configurado para o ambiente de desenvolvimento local usando Docker. Caso precise alterar, copie o exemplo:

```bash
cp .env.example .env
```

**Conteúdo padrão do `.env`:**
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=sabedoria_diaria

JWT_ACCESS_SECRET=sabedoria_diaria_access_secret_2026
JWT_REFRESH_SECRET=sabedoria_diaria_refresh_secret_2026
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

PORT=3000
FRONTEND_URL=http://localhost:4200
```

---

## 🐳 Banco de Dados (Docker)

Não é necessário instalar o PostgreSQL manualmente. Utilizamos o Docker Compose para subir um container com o banco pronto.

### Iniciar o banco de dados:

```bash
docker compose up -d
```
*Isso iniciará um container PostgreSQL 15 na porta 5432.*

### Parar o banco de dados:

```bash
docker compose down
```

---

## 🌱 Populando o Banco (Seed)

O projeto inclui um script de seed robusto que cria:
1.  **5 Seções Temáticas** (Ansiedade, Perdão, Fé, etc.) com traduções (PT/EN/ES).
2.  **15 Cards Temáticos** com conteúdo completo.
3.  **Reflexões Diárias** (uma para hoje, ontem e anteontem).
4.  **Usuário Admin** para testes.

**Execute o seed:**
```bash
npm run seed
```

> **Nota:** O script é idempotente. Você pode rodá-lo várias vezes sem duplicar os dados principais.

---

## ▶️ Rodando a Aplicação

### Modo de Desenvolvimento (Watch Mode)
Recomendado para desenvolvimento. O servidor reinicia automaticamente ao salvar arquivos.

```bash
npm run start:dev
```

### Modo de Produção

```bash
npm run build
npm run start:prod
```

O servidor estará rodando em: `http://localhost:3000`

---

## 📚 Documentação da API (Swagger)

A documentação interativa completa está disponível via Swagger UI.

👉 **Acesse:** [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

Lá você pode testar todos os endpoints diretamente pelo navegador.

---

## 🔑 Autenticação e Usuários

A API utiliza autenticação **Bearer JWT**.
- **Access Token:** Expira em 15 minutos.
- **Refresh Token:** Expira em 7 dias (usado na rota `/auth/refresh` para obter novo access token).

### Usuário de Teste Criado pelo Seed:

| Role | E-mail | Senha |
|---|---|---|
| Admin | `admin@reflexaodiaria.com` | `admin123` |

---

## 📂 Estrutura do Projeto

```
src/
├── auth/                  # Login, Registro, Refresh Token, Recuperação de Senha
├── users/                 # Gestão de usuários e perfil (/users/me)
├── theme-sections/        # Seções temáticas (ex: Ansiedade)
├── theme-cards/           # Conteúdo dos cards
├── daily-insights/        # Reflexão do dia (Lógica de data)
├── reflections/           # Reflexões pessoais do usuário (Diário)
├── common/                # Guards, Decorators, Filters, Pipes
└── database/              # Configuração TypeORM e Seeds
```

## 📡 Resumo dos Endpoints

Prefixo global: `/api/v1`

| Módulo | Método | Rota | Descrição |
|---|---|---|---|
| **Auth** | POST | `/auth/login` | Login (retorna tokens + user) |
| | POST | `/auth/register` | Cria novo usuário |
| | POST | `/auth/refresh` | Renova access token |
| **Users** | GET | `/users/me` | Dados do usuário logado |
| | PATCH | `/users/me` | Atualiza perfil (nome/idioma) |
| **Themes** | GET | `/theme-sections` | Lista seções e cards (no idioma do user) |
| **Cards** | GET | `/theme-cards/:sId/:cId` | Detalhes de um card específico |
| **Daily** | GET | `/daily-insights/today` | Reflexão de hoje |
| | GET | `/daily-insights/history` | Histórico (últimos 30 dias) |
| **Reflections** | POST | `/reflections` | Salva reflexão do usuário (Upsert) |
| | GET | `/reflections/:cardId` | Busca reflexão de um card |

---

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Cobertura de testes
npm run test:cov
```
