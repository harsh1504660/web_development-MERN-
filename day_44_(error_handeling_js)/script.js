let a = prompt("enter a number ")
let b = prompt("enter a second number ")

if (isNaN(a44) || isNaN(b)){
    throw SyntaxError("this is not allowed")
}
let sum = parseInt(a)+parseInt(b)     /// typecasting


try {
    console.log("this sum is ",sum*x);   // x is not defined 
    return true;
} catch (error) {
    console.log("error aa gaya bhai");
    return false;
}
finally{ // will execute the code even after a return block
    console.log("files are being closed and db connection is being closed")
}

