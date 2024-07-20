// let obj = {
//     a:1,
//     b:"harry"
// }
// console.log(obj);

// let animal = {
//     eats:true
// };

// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__ =animal


class Animal{
    constructor(name){
        this.name = name
        console.log("object is created")
    }
    eats(){
        console.log("kha rha hu")
    }
    jump(){
        console.log("jump rha hu")
    }
    sleep(){
        console.log("sleep rha hu")
    }
}

// inheritance
class Lion extends Animal{
    constructor(name){
        super(name)
    console.log("object is created this is lion")
    }
    eats(){
        console.log("lion kha rha hu")
    }
}

let a = new Animal("bunny");
console.log(a)

let l = new Lion("shera")
console.log(l)