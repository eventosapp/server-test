// Server
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello world");
// });

// server.listen(3000);
// console.log("Server on port 3000");

// Server with express
const { Sequelize } = require("sequelize");
const express = require("express");
const app = express();
const sequelize = new Sequelize("postgres://user:ostentapp@database-eventosapp.cgm72eza25xd.us-east-1.rds.amazonaws.com:5432/eventosapp"); // Example for postgres

app.get("/", (req, res) => res.send("Hello worls with express!"));
app.get("/test-connection", (req, res) => testConnection(res));
app.listen(80);
console.log("Server on port 80 with express");

async function testConnection(res) {
  try {
    await sequelize.authenticate();
    res.send("Connection");
  } catch (error) {
    res.send("Error");
  }
}
