import pkg from 'pg';
const { Pool } = pkg;
process.loadEnvFile();
const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    allowExistOnIdle: true
};

const pool = new Pool(config);




export default pool;