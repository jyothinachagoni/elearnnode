let ageFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("<h1>enter age</h1>");
    }
    else if (req.query.age<18){
        res.send("under age");

    }
    else{
        next();
    }
};
module.exports = ageFilter
