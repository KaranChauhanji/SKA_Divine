const cors = require('cors')
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connection = require("./config/db");
const adminRouter = require("./routes/admin.routes");
const contactUsRouter = require("./routes/contactUs.Routes");

const server = express();

server.use(cors())
server.use(express.json());
server.use("/admin", adminRouter);
server.use('/contact', contactUsRouter)

server.get("/", (_, res) => {
  res.status(201).send("Heath Check Done!");
});

server.listen(PORT, async () => {
  try {
    await connection;
    console.log("Server is running and DB is Connected");
  } catch (error) {
    console.log(error);
  }
});
