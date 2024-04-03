let express = require("express")
const ejs = require('ejs');

let path = require("path");
let ageFilter = require('./middlewar')
let studentRouting = require('./Routing/studentRouting')
let employeeRouting = require('./Routing/employeeRouting');

let app = express();

let pathinfo = path.join(__dirname,"public");
console.log(pathinfo);
app.use('/', studentRouting);
app.use('/', employeeRouting);


app.set('view engine', "ejs") //set ejs engine 

app.get('/', (req, res)=>{ //render html files in node js
    res.sendFile(`${pathinfo}/index.html`)
});

app.get('/aboutus', (req, res)=>{
    res.sendFile(`${pathinfo}/aboutus.html`)
});

app.get('/contactus', (req, res)=>{
    res.sendFile(`${pathinfo}/contactus.html`)
});
app.get('/profile', ageFilter, (req, res)=>{  // using ejs 
    let user ={
        id:101,
        name:"jyothi",
        address:"Hyd"
    }
    res.render("profile", {user});
});


app.get('*', (req, res)=>{
    res.send("<h1>unknown Studnet</h1>")
});



app.listen(4000);