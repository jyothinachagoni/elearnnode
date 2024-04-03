let Mongoclient = require("mongodb")
let connectionstring = require("mongodb://localhost:27017")

Mongoclient.connect(connectionstring)
.then((con)=>{
    console.log("connected")
})

.catch((err)=>{
    console.log(err)
})