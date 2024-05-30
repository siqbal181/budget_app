DROP TABLE IF EXISTS budget;

CREATE TABLE budget (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT,
  amount REAL,
  date DATETIME NOT NULL DEFAULT(datetime('now')
);
