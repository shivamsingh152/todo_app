const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const url = 4000;

app.listen(url, ()=>{
    console.log(`server is listening at http://localhost:${url}`)
})

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static('public'))

const dburl = "mongodb+srv://root:root@todos.ecce8yc.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dburl)
.then(()=>{
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log("mondb not connected");
    console.log(error);
});

app.use(require('./routes/app'))
app.use(require('./routes/todo'))


