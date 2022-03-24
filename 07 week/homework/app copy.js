// Digital timer
// 1. Vrem sa afisam un timer in browser, va incepe cu 00 : 00: 00
// 2. Sa se faca update in real time (la fiecare secunda)

// Task 1: Sa definim in html ca va arata acest timer + acces in js

const hourHTML = document.getElementById("hours")
const minuteHTML = document.getElementById("minutes")
const secondHTML = document.getElementById("seconds")

console.log(hourHTML)
console.log(minuteHTML)
console.log(secondHTML)

function addZero(value) {
    if(value<10){
        return "0" + value
    }
    return value
}



// Task 2: Sa incrementam secundele, incepem de la zero, 
// iar dupa ce trece o secunda sa creasca cu 1

let seconds = 0
let minutes = 0
let hours = 0
let clockState = "stopped"





let setTimer = ''

function clockWorks () {
    seconds = seconds + 1
    if(seconds == 60) {
        minutes = minutes + 1
        seconds = 0
    }

    if(minutes == 60) {
        hours = hours + 1
        minutes = 0
    }

    secondHTML.innerHTML = addZero(seconds)
    minuteHTML.innerHTML = addZero(minutes)
    hourHTML.innerHTML = addZero(hours)
    // console.log("se executa la fiecare secunda")
}
   

// rulam intervalul doar daca ceasul este oprit
function startTimer(){ 
    if (clockState =="stopped"){ 
        setTimer = setInterval(clockWorks,1000) 
        clockState = "running"
        console.log(clockState)
        
    }
}


// 3. Adaugam functionalitate pentru stop timer
const stopTimer = function () {

    clearInterval(setTimer);
    clockState = "stopped"
    console.log("stopped")
  }
  
// 4. Adaugam functionalitate pentru reset timer

function resetClock(){
    seconds = 0
    minutes = 0
    hours = 0
     
    secondHTML.innerHTML = addZero(seconds)
    minuteHTML.innerHTML = addZero(minutes)
    hourHTML.innerHTML = addZero(hours)
    clearInterval(setTimer); 
    clockState = "stopped"  
}

// 5. Adaugam functionalitate pentru save timer
let savedTimes = document.getElementById("saved-times")
let laps = 1
function saveTimerHtml() {

    const timerHtml = document.createElement('div');

    timerHtml.innerHTML = `
        <div class="lap">
        <span>Lap ${laps}<br /></span> 
        <span>${addZero(hours)}</span> :
        <span>${addZero(minutes)}</span> :
        <span>${addZero(seconds)}</span>
        </div>
    `
    laps = laps+1
    savedTimes.appendChild(timerHtml) 
  }


