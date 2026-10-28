const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  msg_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  added DATE
);

INSERT INTO messages (username, text, added)
VALUES ('Varun', 'Hello World', '2026-10-27')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.PGDATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
