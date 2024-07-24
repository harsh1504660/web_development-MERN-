use("cruddb")

// CREATE 
db.createCollection("courses")

// INSERT
db.courses.insertMany([{
    "name": "Python",
    "Price": 15000,
    "Instructor": "Alice"
  },
  {
    "name": "JavaScript",
    "Price": 18000,
    "Instructor": "Bob"
  },
  {
    "name": "C++",
    "Price": 22000,
    "Instructor": "Charlie"
  },
  {
    "name": "Ruby",
    "Price": 17000,
    "Instructor": "David"
  },
  {
    "name": "C#",
    "Price": 19000,
    "Instructor": "Eva"
  },
  {
    "name": "Swift",
    "Price": 21000,
    "Instructor": "Frank"
  },
  {
    "name": "Kotlin",
    "Price": 16000,
    "Instructor": "Grace"
  },
  {
    "name": "PHP",
    "Price": 23000,
    "Instructor": "Hank"
  },
  {
    "name": "TypeScript",
    "Price": 20000,
    "Instructor": "Ivy"
  },
  {
    "name": "Go",
    "Price": 18000,
    "Instructor": "Jack"
  }
]
);

// READ

// let a = db.courses.find({"Price":20000})
// console.log(a)
// console.log(a.count())

let b = db.courses.findOne({"Price":20000})
console.log(b)


// UPDATE

db.courses.updateOne({"Price":20000},{$set:{"Price":0}})


// DELETE

db.courses.deleteOne({"Price":100})
db.courses.deleteMany({"Price":20000})

// OPERATIONS


// greater than 
let c = db.courses.findOne({"Price" :{$gt:10000}})
console.log(c)

// smaller than
let d = db.courses.findOne({"Price":{ $lt:1000 }})
console.log(d)

// not equal 
let e = db.courses.findOne({"Price":{$ne:20000}})
console.log(e)

// and opertor
let f = db.courses.findOne({$and :[
    {"Price":{$gt:10000}},
    {"name":"PHP"}
]})
console.log(f)

