const express = require("express");
const app = express.Router();
const db = require("../data/dbConfig");

//! CREATE an account
app.post("/", (req, res) => {
  try {
    db("accounts")
      .insert(req.body)
      .then(response => {
        res.status(201).json(response);
      });
  } catch (err) {
    res.status(500).json({ message: "Issue creating data" });
  }
});
//! READ all accounts
app.get("/", (req, res) => {
  try {
    db("accounts").then(response => {
      res.status(200).json(response);
    });
  } catch (err) {
    res.status(500).json({ message: "Issue reading data" });
  }
});
//! UPDATE account by id
app.put("/:id", (req, res) => {
  try {
    db("accounts")
      .where({ id: req.params.id })
      .update({ name: req.body.name, budget: req.body.budget })
      .then(response => {
        res.status(200).json(response);
      });
  } catch (err) {
    res.status(500).json({ message: "Issue updating data" });
  }
});
//! DELETE account by id
app.delete("/:id", (req, res) => {
  try {
    db("accounts")
      .where({ id: req.params.id })
      .del()
      .then(response => {
        res.status(200).json(response);
      });
  } catch (err) {
    res.status(500).json({ message: "Issue deleting data" });
  }
});

module.exports = app;
