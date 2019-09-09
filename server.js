const express = require("express");
const AccountRouter = require("./accounts/AccountRouter");
const app = express();

app.use(express.json());

app.use("/api/accounts", AccountRouter);

module.exports = app;
