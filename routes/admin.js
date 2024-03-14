const express = require("express");
const router = express.Router();

const {createUser, updateUser, deleteUser} = require('../controllers/adminControllers')

router.get("/dashboard", (req, res) => {
  res.render("admin/adminDashboard.ejs");
});

router.post('/', createUser)

router.put('/', updateUser)


router.delete('/', deleteUser)

module.exports = router;
