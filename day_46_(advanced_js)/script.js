async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
}


// immidiatly invoke function
// (async function main(){
//     let a = await sleep()
//     console.log(a);
//     let b = await sleep()
//     console.log(b);
// })()


// destructuring
let [x,y,...rest] = [1,5,7,8,99]
console.log(x,y,rest);


// spread syntax
let arr = [1,4,6] 
function sum(a,b,c){
    return a+b+c
}
console.log(sum(...arr));
