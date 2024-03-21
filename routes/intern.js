const express = require("express");
const router = express.Router();

router.get("/myDashboard", (req, res) => {
  res.render("intern/internDashboard.ejs");
});

router.get("/internDashboard", (req, res) => {
  res.render('intern/internView.ejs')
})

module.exports = router;
