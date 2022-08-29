let homeScore = document.getElementById("num1")
let guestScore = document.getElementById("num2")
let starthScore = 0
let startgScore = 0

// Home score
function homePlusone(){
    console.log("Button 1 Clicked")
    starthScore++
    homeScore.textContent = starthScore
}

function homePlustwo(){

    starthScore+=2
    homeScore.textContent = starthScore
}

function homePlusthree(){
   
    starthScore+=3
    homeScore.textContent = starthScore
}

// Guest score
function guestPlusone(){
    console.log("Button 1 Clicked")
    startgScore++
    guestScore.textContent = startgScore
}

function guestPlustwo(){

    startgScore+=2
    guestScore.textContent = startgScore
}

function guestPlusthree(){
    startgScore+=3
    guestScore.textContent = startgScore
}