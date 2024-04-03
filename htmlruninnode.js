let express = require("express")
let path = require("path");
let studentRouting = require('./Routing/studentRouting')
let employeeRouting = require('./Routing/employeeRouting')
let app = express();

let pathinfo = path.join(__dirname,"public");
console.log(pathinfo);
app.use('/', studentRouting);
app.use('/', employeeRouting);


app.get('/', (req, res)=>{
    res.sendFile(`${pathinfo}/index.html`)
});

app.get('/aboutus', (req, res)=>{
    res.sendFile(`${pathinfo}/aboutus.html`)
});

app.get('/contactus', (req, res)=>{
    res.sendFile(`${pathinfo}/contactus.html`)
});


app.get('*', (req, res)=>{
    res.send("<h1>unknown Studnet</h1>")
});



app.listen(4000);