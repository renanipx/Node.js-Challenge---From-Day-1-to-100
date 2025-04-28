require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function main() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conexão bem-sucedida! Hora atual do banco:', res.rows[0].now);
  } catch (err) {
    console.error('Erro ao conectar com o banco:', err);
  } finally {
    await pool.end();
  }
}

main();
