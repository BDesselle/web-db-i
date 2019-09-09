const express = require("express");

const db = require("./data/dbConfig.js");

const app = express();

app.use(express.json());

module.exports = app;
