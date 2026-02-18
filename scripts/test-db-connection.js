const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

console.log('--- Teste de Conexão Neon (PostgreSQL) ---');

// Corrigido: buscar .env na raiz (um nível acima de scripts/)
const envPath = path.resolve(__dirname, '../.env');

const envConfig = {};

if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach((line) => {
        if (line.trim().startsWith('#')) return;
        const parts = line.split('=');
        const key = parts.shift();
        const value = parts.join('=');
        if (key && value) envConfig[key.trim()] = value.trim();
    });
    console.log('✅ .env carregado.');
} else {
    console.error('❌ .env não encontrado em:', envPath);
    process.exit(1);
}

const client = new Client({
    host: envConfig.DATABASE_HOST,
    port: envConfig.DATABASE_PORT,
    user: envConfig.DATABASE_USER,
    password: envConfig.DATABASE_PASSWORD,
    database: envConfig.DATABASE_NAME,
    ssl: { rejectUnauthorized: false },
});

console.log(`📍 Host: ${envConfig.DATABASE_HOST}`);

(async () => {
    try {
        console.log('⏳ Conectando...');
        const start = Date.now();
        await client.connect();
        const duration = Date.now() - start;
        console.log(`✅ SUCESSO! Conexão estabelecida em ${duration}ms`);
        await client.end();
    } catch (err) {
        console.error('❌ ERRO NA CONEXÃO:', err.message);
        process.exit(1);
    }
})();
