console.log("----- Example 1")
// create an object 'car'
const car = {
    type: "fiat",
    model: "500",
    color: "white"
}

//methods
carname: function(){
    return this.type +" "+ this.model
}
//call the property of the car
console.log(car .color)
console.log(car["type"])
console.log(car.carname())

console.log("----- Example 2: object constructor")
function Course(title, instructor, code, session, students){
    this.t = title
    this.i = instructor
    this.c = code
    this.s = session
    this.number_students = students
}
//create an object of the constructor course
let course1 = new Course("Computer Application", "Prof . Wu", "Tech100", "M1", 20)
let course2 = new Course("JS programming", "Prof . Novak", "ET712", "C3", 18)

// access to the course value
console.log(course1.i)
console.log(course2.number_students)

console.log("----- Example 3: methods of an object")
const Square = {
    //methods
    area(side){return side*side}
    perimeter(side){return 4*side}
}
//access to the method of an object
let s = 9
let area1 = Square.area(s)
let perimeter1 = Square.perimeter(s)
console.log('the square with side {s} has an area of ${area1} and a perimeter of ${perimeter1}')
console.log("----- Example 4: methods of an object using 'this' statement")
const hen = {
//properties
name: "Helen",
eggcount : 0,

//method
lay_an_egg(){
    this.eggcount ++
    return 'EGG'
}
}
console.log("----- LAB EXERCISE1")
const mycalculator = {
    //properties
    message : "square calculator",
    description : "stores the value of 2"
    area_square(side){return Math.pow(side, 2)}
    volume_cube(side){return Math.pow(side, 3)}
}