console.log("tutorial on loop")

// for loop
let a =1;
for (let i = 0; i < 100; i++) {
        console.log(a+i);
    
}

let obj = {
    name:"harsh",
    role:"programmer",
    company:"codewithharry"
}

// for in loop
for (const key in obj) { 
        const element = obj[key];
        console.log(key,element)
}

//for off
for (const c of "object") {
    console.log(c)
}

//while loop
let i=0;
while (i<6){
    console.log(i);
     i++
}

//do while loop
let ab= 12;
do {
    console.log(i)
    i++;
} while (i<6);


