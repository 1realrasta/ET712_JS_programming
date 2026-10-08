// get the elements with class name 'description'
// querySelector only selects the first element
let desc = document.querySelector('.description')

//querySelectorAll selects all the elements 
let desc_all = document.querySelectorAll('.description')

// get the element by id 'title'
let t = document.querySelector('#title')

//get the elements by tag name , li
let list_item = document.querySelectorAll('li')

// example 1
// select the elements
let shape = document.querySelector('.shape')
let btnSquare = document.querySelector('.btnSquare')
let btnRectangle = document.querySelector('.btnRectangle')
let btnCircle = document.querySelector('.btnCircle')

btnCircle.addEventListener('click', function(){
    shape.textContent = 'Circle'.toUpperCase()
    shape.className = 'circle'
})

btnRectangle.addEventListener('click', function(){
    shape.textContent = 'Rectangle'.toUpperCase()
    shape.className = 'rectangle'
})
btnSquare.addEventListener('click', function(){
    shape.textContent = 'Square'.toUpperCase()
    shape.className = 'square'
})