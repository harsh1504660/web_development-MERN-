// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school.Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses(Gryffindor(length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ['shub','anjali','harsh','atharva','jay','singh',
    'jayyy','jinf'
]

let house = []

for(const student of students){
    if (student.length < 6) {
        house.push("green")
    }
    else if (student.length <9){
        house.push("red")

    }
    else if (student.length < 12){
        house.push("yellow")

    }
    else{
        house.push("nothign")
    }
}
console.log(house);