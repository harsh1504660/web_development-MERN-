async function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3500);
    })
}
async function main(){
    console.log("load data");
    let data =await getdata()
    console.log(data);
    
    console.log("processing the data")
    console.log("task 3")
}

main()