let MongoClient = require("mongodb").MongoClient;
let conString = "mongodb://localhost:27017/";

let data = [
    {
        name: "rajesh1",
        phone: 9133102210,
        address: "Hyderabad",
        },
        {
            name: "rajesh2",
            phone: 9133102210,
            address: "Hyderabad",
            },

{
    name: "rajesh3",
    phone: 9133102210,
    address: "Hyderabad",
    }]
MongoClient.connect(conString)
.then((con) => {
let dbo = con.db("demo4pm");
let query = {name:"rajesh"};
let newValue = {$set: {name:"naresh", address:"chennai"}};
let coll = dbo
.collection("emp")
.updateOne(query, newValue)
.then((res) => {
 console.log("Data updated succ..");
})
.catch((err) => {
 console.log(err);
 });
})
.catch((err) => {
 console.log(err);
});
