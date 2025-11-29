const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || null,
  host: process.env.PGHOST || 'localhost',
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
  database: process.env.PGDATABASE || 'stackghost',
  port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
