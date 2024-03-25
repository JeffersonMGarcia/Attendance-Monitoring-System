const express = require("express");
const router = express.Router();

const {getUser ,createUser, updateUser, deleteUser} = require('../controllers/adminControllers')

router.get("/addAccount", (req, res) => {
  res.render("admin/adminDashboard.ejs");
});

router.get("/myDashboard", (req, res) => {
  res.render("admin/Dashboard.ejs");
})

router.get('/internAccount', (req, res) => {
  res.render("admin/intern.ejs")
})

router.get("/getAccount", getUser);

router.post('/createAccount', createUser)

router.put('/', updateUser)

router.delete('/deleteAccount/:id', deleteUser)

module.exports = router;
