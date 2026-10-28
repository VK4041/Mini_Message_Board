const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  msg_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  added DATE,
);

INSERT INTO messages (user, text, added)
VALUES ('Varun', 'Hello World', '2026-10-27')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
