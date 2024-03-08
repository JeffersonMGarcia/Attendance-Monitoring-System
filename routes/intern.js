const express = require("express");
const router = express.Router();

router.get("/myDashboard", (req, res) => {
  res.render("intern/internDashboard.ejs");
});

module.exports = router;
