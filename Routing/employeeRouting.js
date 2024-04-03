let express = require("express")

let employeeRouting = express.Router();


employeeRouting.get('/employee', (req, res)=>{
    res.send("<h1>Studnet</h1>")
});
employeeRouting.post('/addemployee', (req, res)=>{
    res.send("<h1>add Studnet</h1>")
});
employeeRouting.put('/editemployee', (req, res)=>{
    res.send("<h1>edit Studnet</h1>")
});
employeeRouting.delete('/deleteemployee', (req, res)=>{
    res.send("<h1>delete Studnet</h1>")
});

module.exports = employeeRouting;