const mysql = require('mysql2/promise');

async function buscarDados() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });

    const [rows] = await connection.execute('SELECT * FROM tabela');
    return rows;
}

