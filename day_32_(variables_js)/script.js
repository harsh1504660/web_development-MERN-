console.log("this is tutorial")

var a =5;
var b=6;
var c = "harsh";
const f=  12;  // cannot change the f 
console.log(typeof a,typeof b, typeof c)
console.log(a+b)
console.log("value of a is : "+a)

{   
    let a =66      // scope is inside the block only
    console.log(a)
}


let x = "harsh joshi";
let y =22;
let z=3.35;
const p = true;

let q = undefined;
let n =null;
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof n)

let o = {
    "name":"harry",
    "job rolo" : 5666, 
    "is handom" :true,
}
console.log(typeof o)
o.salary = "100xorrors"
console.log(o)