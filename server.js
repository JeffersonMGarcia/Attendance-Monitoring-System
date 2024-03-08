const express = require('express')
const dotenv = require('dotenv').config()

const app = express();

const port = process.env.PORT || 8000;

app.use(express.static('public'))
app.set("view engine","ejs");
app.set("views", "views")


app.use('/intern', require('./routes/intern'))
app.use('/admin', require('./routes/admin'))

app.get("/login", (req, res) => {
    res.render('admin/login.ejs')
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})
