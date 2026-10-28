const pool = require("./pool.js");

async function fetchMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log("Fetched");
  return rows;
}

async function storeMessage(message) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    Object.values(message),
  );
  console.log("Stored Message");
}
module.exports = {
  fetchMessages,
  storeMessage,
};
