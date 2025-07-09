const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const historyController = require("./controllers/historyController");
require("dotenv").config();

// Set up express
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("⛔  MONGO_URI not set in .env");
  process.exit(1);
}
mongoose
  .connect(mongoUri)
  .then(() => console.log("🔌  MongoDB connected"))
  .catch((err) => {
    console.error("❌ Mongo connection error", err);
    process.exit(1);
  });

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("getAllHistories is:", typeof historyController.getAllHistories);
// Routes
// POST
app.post("/histories", historyController.createHistory);
// GET
app.get("/histories", historyController.listHistories);
app.get("/histories/:id", historyController.getHistoryById);
// PUT
app.put("/histories/:id", historyController.updateHistory);
// DELETE /histories/:id — remove a record
app.delete("/histories/:id", historyController.deleteHistory);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello, Express is up and running!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
