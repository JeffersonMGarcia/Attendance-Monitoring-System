const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const accountModel = require('../models/accounts');
const mongoose = require("mongoose")
const {userLogin} = require("../controllers/internControllers")

router.get("/myDashboard", (req, res) => {
  res.render("intern/internDashboard.ejs");
});

router.get("/internDashboard",(req, res) => {
  res.render('intern/internView.ejs')
})

router.get("/internSummary", (req, res) => {
  res.render('intern/internSummary.ejs')
})

module.exports = router;
