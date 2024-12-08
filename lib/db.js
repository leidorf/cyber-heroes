const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(process.cwd(), "db", "cyber-heroes.db");
const db = new sqlite3.Database(dbPath);

module.exports = db;
