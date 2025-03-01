require('dotenv').config();
const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'app',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'board_game_db',
    port: process.env.DB_PORT || 3307,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});

const db = {
    query: (sql, params = []) => {
        return new Promise((resolve, reject) => {
            pool.query(sql, params, (error, results) => {
                if (error) {
                    console.error('Database query error:', error.message);
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    },

    close: () => {
        return new Promise((resolve, reject) => {
            pool.end((error) => {
                if (error) {
                    console.log('error closing db:', error);
                    return reject(error);
                }
                resolve();
            });
        });
    }
};

module.exports = db;
