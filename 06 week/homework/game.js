// 1. We listen for the arrow events and move the player
let player = document.querySelector(".player");

document.addEventListener("keydown", function (event) {
    let oldTop = parseInt(player.style.top)
    let oldLeft = parseInt(player.style.left)
    if (event.code === "ArrowDown" && oldTop <= 300) {
        player.style.top = `${
            oldTop + 50
        }px`
        console.log("player down")
    }
    if (event.code === "ArrowUp" && oldTop > 0) {
        player.style.top = `${
            oldTop - 50
        }px`
        console.log("player up")
    }
    if (event.code === "ArrowRight" && oldLeft <= 300) {
        player.style.left = `${
            oldLeft + 50
        }px`
        console.log("player right")
    }
    if (event.code === "ArrowLeft" && oldLeft > 0) {
        player.style.left = `${
            oldLeft - 50
        }px`
        console.log("player left")
    }
});


// 2. Set-up random coordinates - in increments of 50 (the visual width&height of a tile)
let obsTop = [];
let obsLeft = [];


for (i = 0; i < 5; i ++) {
    let coordinate = Math.floor(Math.random() * 8) * 50
    obsTop.push(coordinate)
    let coordinate2 = Math.floor(Math.random() * 8) * 50
    obsLeft.push(coordinate2)

}
console.log(obsTop, obsLeft)

// 3. create div at random coordinates
let visibility = "hidden"
for (i = 0; i < 5; i ++) {
    let obstacle = document.createElement("div")
    const obsPolice = document.createElement("img");
    obsPolice.src = "./police.png"
    obsPolice.style.height = 50 + "px"
    obsPolice.style.width = 50 + "px"
    obstacle.appendChild(obsPolice);
    obstacle.className = "police-men"
    obstacle.style.position = "absolute"

    obstacle.style.top = `${
        obsTop[i]
    }px`
    obstacle.style.left = `${
        obsLeft[i]
    }px`
    gameContainer.appendChild(obstacle)
    obstacle.style.visibility = visibility
}


//4. Check if player and police intersect

let rules = document.getElementById("health-bar")
let lives = 3
for (i=0; i < lives; i++){
    const hearts = document.createElement("p")
    hearts.innerHTML = "❤️"
    rules.appendChild(hearts)

}

let topHistory = [0]
let leftHistory = [0]

document.addEventListener("keydown", function (event) {
    let currentTop = parseInt(player.style.top)
    let currentLeft = parseInt(player.style.left)


    const policeForce = gameContainer.getElementsByClassName("police-men")
    console.log(policeForce)
    
        for (i = 0; i < policeForce.length; i ++) {
            if (currentTop == obsTop[i] && currentLeft == obsLeft[i]) {
                policeForce[i].style.visibility = "visible"
                lives = lives-1
                rules.removeChild(rules.firstElementChild)

                console.log(policeForce[i])
            }
            }
        
    if (lives === 0){
        alert("you lost! Please try again!")
        location.reload();
    }
    
    if (currentTop === 350 && currentLeft === 350){
        alert("Congratulations! You won!")
        location.reload();
    }

    
})

