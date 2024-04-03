let nodeMailer = require("nodemailer")

let transport = nodeMailer.createTransport({
    //if we want to send from domain we can that url in host
    //host:
    //port:
    service:'gmail',
    auth:{
        user:'jyothinachagoni@gmail.com',
        pass:'jbda brnd ywmd cbya',
    },

});
let mailOptions = {
    to:"hariakshb@gmail.com",
    from:"jyothinachagoni@gmail.com",
    subject: "Greetings From Amma",
    text:"Good Morning Kannayya",

};
transport.sendMail(mailOptions, (err, info)=>{
    if(err)throw err;
    console.log("mail send suuceefull");
})