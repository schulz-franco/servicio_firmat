import mysql from 'serverless-mysql';

const db = mysql({
    config: {
        host: "localhost",
        database: "firmat",
        user: "root",
        password: "4444"
    }
});

export { db };