//select element to add to an event
let btnpress = document.querySelector(".btnpress")
//add a click event to the button
//when user click on the button, it will open dialog box
btnpress.onclick = function(){
    alert('ET712')
}

//collect the circle and counter element
let circle = document.querySelector(".circle")
let counter = document.querySelector(".counter")
let btnreset = document.querySelector(".btnreset")
let setcounter = 0
circle.onmouseover = function(){
    setcounter +=1
    counter.textContent = setcounter
    circle.style.backgroundColor = changecolor()
}
btnreset.onclick = function(){
    setcounter = 0
    counter.textContent = 0
}

function changecolor(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return `rgb(${red}, ${green}, ${blue})`
}

//EVENT LISTENER
//collect the element
let btnchangecolor = document.querySelector(".btnchangecolor")
btnchangecolor.addEventListener("click", function(event){
    event.target.style.backgroundColor =changecolor()
    if (event.target.textContent === "CHANGE COLOR"){
        event.target.textContent = "CLICK AGAIN"
    }
    else{
        event.target.textContent = "CHANGE COLOR"
    }
})