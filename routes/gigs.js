const express = require("express");
const router = express.Router();
const db = require("../config/db");
const Gig = require("../models/Gig");

// Get all gigs
router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

// Add a gig
router.get("/add", (req, res) => {
  // Faking the request data
  const data = {
    title: "Looking for a PHP developer",
    technologies: "PHP",
    budget: "$1000",
    description: "I want a PHP developer",
    email: "user1@user.com",
  };

  let { title, technologies, budget, description, email } = data;

  // Insert Data to table
  Gig.create({
    title,
    technologies,
    budget,
    description,
    email,
  })
    .then((gig) => res.redirect("/gigs"))
    .catch((err) => console.log(err));
});

module.exports = router;
