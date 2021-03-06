const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// Importing Database
const db = require("./config/db");

// Testing DB connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const app = express();

app.get("/", (req, res) => res.send("Server is up"));

// Gig routes
app.use("/gigs", require("./routes/gigs"));

const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
