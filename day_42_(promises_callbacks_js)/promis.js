console.log("this is promis");

let prom1 = new Promise((resolve , reject )=>{
    let a =Math.random();
    if (a<0.5){
        reject("not supporing")
    }
    else{
        setTimeout(() => {
        console.log("yes i am done");
        resolve("harsh");
        },3000);
    }

})


prom1.then((a)=>{
    console.log(a);
}).catch((err) =>{
    console.log(err);
})
