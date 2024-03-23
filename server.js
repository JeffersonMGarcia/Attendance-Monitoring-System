const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config()
const accountModel = require('./models/accounts');
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');
const accounts = require('./models/accounts');
const {userLogin} = require("./controllers/internControllers")




connectDb()
const app = express();

const port = process.env.PORT || 8000;

app.use(cookieSession({
  name: 'session',
  keys: "jefqt",
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(express.static('public'))
app.use(express.json(), express.urlencoded({ extended: true }))

app.set("view engine","ejs");



//ROUTES
app.use('/intern', require('./routes/intern'))
app.use('/admin', require('./routes/admin'))


app.get("/login", (req, res) => {
    res.render('admin/login.ejs')
})

app.post("/login", userLogin)

app.use(errorHandler)

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
