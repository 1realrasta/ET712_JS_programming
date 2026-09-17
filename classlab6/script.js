let hourNow = 15;
let greeting;

if(hourNow > 24){greeting = 'Welcome to the next day!'}
else if(hourNow>18){greeting = 'Good Evening!'}
else if(hourNow>12){greeting = 'Good Afternoon!'}
else if(hourNow>0){greeting = 'Good Morning!'}
else{greeting = 'Welcome'}
document.write('<h2>' + greeting + '</h2>')

console.log("Khalil Harriott")
console.log(greeting)
console.log("Example 1 : conversion between data types")
let num1 = prompt("Enter number 1")
num1 = parseInt(num1)
let num2 = prompt("Enter number 2")
let sum = num1 + num2
console.log(`The sum of ${num1} and ${num2} is ${sum}`)

console.log("Exercise")
let firstname = prompt("Enter first name: ")
let age = prompt("Enter an age: ")
age = parseInt(age)
let language = prompt("Favorite programming language: ")
let hobby = prompt("Favorite hobby: ")
console.log(`My name is ${firstname}. I am ${age} years old, I love ${language}, and my favorite hobby is ${hobby}.`)