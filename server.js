// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
console.log(jsonServer.defaults());
const cors = require("cors");

server.use(middlewares);
server.use("", router);
server.use(
  cors({
    origin: "*",
  })
);
server.listen(process.env.PORT || 3000, () => {
  console.log(`JSON Server is running on port ${process.env.PORT || 3000}`);
});
