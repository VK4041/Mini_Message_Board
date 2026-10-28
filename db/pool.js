const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.PGDATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
