require("dotenv").config();

const express = require("express");

const { connectDB } = require("./src/config/database.js");
const { configDotenv } = require("dotenv");

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Your bus arrives in 5 minutes");
});

app.post("/ticket", (req, res) => {
  res.status(201).json({ message: "Ticket Purchased successfully." });
});

app.put("/ticket/:id", (req, res) => {
  res.status(200).json({ message: "Ticket Changed successfully." });
});

app.post("/ticket/:id", (req, res) => {
  res.status(200).json({ message: "Ticket Cancelled successfully." });
});
app.listen(3000, () => {
  console.log("The port is running");
});

//mongodb+srv://Madhavi:<db_password>@cluster0.fswcqon.mongodb.net/?appName=Cluster0
