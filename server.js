const express = require('express')

const app = express();

const port = 8000;

app.use(express.static('public'))
app.set("view engine","ejs");
app.set("views", "views")


app.use('/intern', require('./routes/intern'))
app.use('/admin', require('./routes/admin'))


app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})