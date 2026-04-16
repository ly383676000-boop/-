const path = require('path');
const fs = require('fs');

let db = null;

const initSQL = [
  `CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    name_en TEXT,
    brand TEXT,
    description TEXT,
    description_en TEXT,
    price REAL NOT NULL,
    image_url TEXT,
    category TEXT,
    colors TEXT,
    sizes TEXT,
    specifications TEXT,
    materials TEXT,
    custom1_name TEXT,
    custom1_values TEXT,
    custom2_name TEXT,
    custom2_values TEXT,
    custom3_name TEXT,
    custom3_values TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS product_variants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    sku TEXT UNIQUE NOT NULL,
    color TEXT,
    size TEXT,
    specification TEXT,
    material TEXT,
    custom_param1_name TEXT,
    custom_param1_value TEXT,
    custom_param2_name TEXT,
    custom_param2_value TEXT,
    custom_param3_name TEXT,
    custom_param3_value TEXT,
    notes TEXT,
    price_modifier REAL DEFAULT 0,
    stock INTEGER DEFAULT 100,
    image_url TEXT,
    FOREIGN KEY (product_id) REFERENCES products(id)
  )`,
  `CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_number TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_address TEXT NOT NULL,
    customer_phone TEXT,
    customer_postal_code TEXT,
    total_amount REAL NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`,
  `CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_name TEXT NOT NULL,
    variant_sku TEXT NOT NULL,
    color TEXT,
    size TEXT,
    specification TEXT,
    material TEXT,
    custom_params TEXT,
    quantity INTEGER NOT NULL,
    unit_price REAL NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id)
  )`
];

function initDB() {
  const dbPath = path.join(__dirname, 'database.sqlite');
  
  // Try Node.js built-in sqlite first (Node >= 22.5)
  try {
    const { DatabaseSync } = require('node:sqlite');
    db = new DatabaseSync(dbPath);
    db.exec('PRAGMA journal_mode = WAL');
    for (const sql of initSQL) {
      db.exec(sql);
    }
    db._mode = 'node-sqlite';
    console.log('Database initialized (node:sqlite) at', dbPath);
    return db;
  } catch (e1) {
    // fallback to better-sqlite3
    try {
      const Database = require('better-sqlite3');
      db = new Database(dbPath);
      db.pragma('journal_mode = WAL');
      for (const sql of initSQL) {
        db.exec(sql);
      }
      db._mode = 'better-sqlite3';
      console.log('Database initialized (better-sqlite3) at', dbPath);
      return db;
    } catch (e2) {
      console.error('Failed to initialize database:', e2.message);
      throw e2;
    }
  }
}

function getDB() {
  if (!db) initDB();
  return db;
}

function runQuery(sql, params = []) {
  const database = getDB();
  try {
    const stmt = database.prepare(sql);
    return stmt.all(...params);
  } catch (err) {
    console.error('Query error:', err.message, '\nSQL:', sql);
    return null;
  }
}

function runInsert(sql, params = []) {
  const database = getDB();
  try {
    const stmt = database.prepare(sql);
    const result = stmt.run(...params);
    // lastInsertRowid may be 0n or 0 for UPDATE/DELETE, which is fine
    return result.lastInsertRowid !== undefined ? Number(result.lastInsertRowid) : null;
  } catch (err) {
    console.error('Insert error:', err.message, '\nSQL:', sql);
    return null;
  }
}

function saveDB() {
  // Both node:sqlite and better-sqlite3 auto-save, no-op
}

module.exports = { initDB, getDB, runQuery, runInsert, saveDB };
