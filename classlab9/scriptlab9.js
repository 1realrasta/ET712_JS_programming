console.log("khalil harriott")
console.log("\n ----- example 1: intro to function")
// define a function that prints from 3 to 1
function (params) {
    
} printcount(){
    for(let num = 3; num>=1 ; num--){
        console.log(num)
    }
}
console.log("\n ----- example 2: function with parameters")
// function prints name a name. the name is passed to the function
function greeting(name){
    console.log(`Good Afternoon ${name.toUpperCase()}`)
    
}
console.log("\n ----- example 3: function with parameters")
// function that prints a message that starts with number 1 all the way up to the stopnumber
// the stopnumber and the message are passed to the function
function greetcount(msg, stopnumber){
    for(let n = 1; n<=stopnumber ; n++){
        console.log(`${msg}${n}`)
    }
}
console.log("\n ----- example 4: function with parameters")
//function that prints 'snake eyes' if the two numbers are 1
function snake(n1, n2){
    if(n1===1  n2 ===1){
        console.log("snake eyes")
    }
    else{
        console.log("Not snake eyes")
    }
}
console.log("\n ----- example 5: function that returns value")
//function that calculates the area of a square and returns the calculated area
function areasquare(side){
    console.log("Calculate area of square with side", side)
    return side*side
    console.log("The area is", side*side)
}
console.log("\n ----- example 6: function that returns Boolean value")
// function that returns 'true' if the temperature is greater than 75
// otherwise, it returns 'false'
// the temperature is passed to the function
function checktemperature(t){
    if(t>75)
        return true
    else
        return false
}
console.log("\n ----- example 7: JS built-in Math function ")
const PI = Math.PI
console.log(PI)
console.log(`Round PI = ${Math.round(PI)}`)
console.log(`Ceil PI = ${Math.ceil(PI)}`)
console.log(`Floor PI = ${Math.floor(PI)}`)
console.log(`Power PI = ${Math.pow(PI)}`)
console.log(`square root of 81 = ${Math.sqrt(81)}`)
console.log(`random numbers = ${Math.random()}`)
console.log(`Return of random number between 1 and 9 = ${Math.round(Math.random()*9)}`)
console.log("\n ----- example 8: JS built-in Math function ")
//function that will randomly pick a color from an array
let colors = ['green', 'purple', 'black', 'blue', 'gold']

function pickcolor(lastindex){
    let random_index = Math.floor(Math.random()*lastindex)
    return random_index
}
let index = pickindex(colors.length())
let pickcolor = colors
console.log(`Randomly picked color = ${pickcolor}`)