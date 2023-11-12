import postgres from "postgres";

const sql = postgres({
  host: "127.0.0.1", // Postgres ip address[s] or domain name[s]
  port: 5432, // Postgres server port[s]
  database: "legal_document_test", // Name of database to connect to
  username: "admin", // Username of database user
  password: "123456", // Password of database user
});

export default sql;
