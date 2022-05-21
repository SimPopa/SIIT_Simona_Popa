import Spaceship, {activeShip} from './Spaceship.js'



const spaceship1 = new Spaceship()
const spaceship2 = new Spaceship()
const spaceship3 = new Spaceship()

const listShips = [spaceship1, spaceship2, spaceship3];

const addShipButton = document.getElementById("add-ship");

addShipButton.addEventListener("click", () => {
    const ship = new Spaceship();
    listShips.push(ship);
})


document.addEventListener("keydown", function (event) {
    if (event.code === 'ArrowRight') {
        console.log("key press")
        if (activeShip) {
            activeShip.moveShip("right");
        }

    }

    else if (event.code === 'ArrowLeft') {
        console.log("key press")
        if (activeShip) {
            activeShip.moveShip("left");
        }
    }

    else if (event.code === 'ArrowUp') {
        console.log("key press")
        if (activeShip) {
            activeShip.moveShip("up");
        }

    }
    else if (event.code === 'ArrowDown') {
        console.log("key press")
        if (activeShip) {
            activeShip.moveShip("down");
        }

    }
})
