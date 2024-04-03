

let a = 10;
let b= 20;
let prom = new Promise((res, rej)=>{
    if(true){

        setTimeout(()=>{
res(90);
        }, 2000)
    }
    else{
     rej("b value not there")

    }

});
prom.
then((b)=>{
c=a+b;
console.log(c)
})
.catch((data)=>{
console.log(data)
})
