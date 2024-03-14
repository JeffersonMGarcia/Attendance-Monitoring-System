const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config()

connectDb()
const app = express();


const port = process.env.PORT || 8000;

app.use(express.static('public'))
app.use(express.json(), express.urlencoded({ extended: true }))

app.set("view engine","ejs");

//STEP 2
app.use('/intern', require('./routes/intern'))
app.use('/admin', require('./routes/admin'))

app.get("/login", (req, res) => {
    res.render('admin/login.ejs')
})

app.use(errorHandler)

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
