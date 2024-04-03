let express = require("express")
let studentRouting = express.Router();

studentRouting.get('/student', (req, res)=>{
    res.send("<h1>Studnet</h1>")
});
studentRouting.post('/addstudent', (req, res)=>{
    res.send("<h1>add Studnet</h1>")
});
studentRouting.put('/editstudent', (req, res)=>{
    res.send("<h1>edit Studnet</h1>")
});
studentRouting.delete('/deletestudent', (req, res)=>{
    res.send("<h1>delete Studnet</h1>")
});
module.exports = studentRouting;