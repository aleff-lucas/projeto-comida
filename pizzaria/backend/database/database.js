const Database = require("better-sqlite3");

const db = new Database("pizzaria.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS pizzas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        descricao TEXT,
        preco REAL NOT NULL
    )
`);

module.exports = db;