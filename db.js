require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'board_game_db',
    port: process.env.DB_PORT || 3306,
    connectionLimit: 10
});

// Convert pool to promise-based manually (since `mysql` doesn't support it natively)
const db = {
    query: (sql, params) => new Promise((resolve, reject) => {
        pool.query(sql, params, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    }),
    close: () => new Promise((resolve, reject) => {
        pool.end(error => {
            if (error) return reject(error);
            resolve();
        });
    })
};

module.exports = db;
