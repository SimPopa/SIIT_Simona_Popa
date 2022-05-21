let activeShip = null

const spaceshipType = ["./red-spaceship.png", "./green-spaceship.png", "./blue-spaceship.png"]


class Spaceship {
    constructor() {
        console.log('Se creeaza the Spaceship');
        const selectType = Math.floor(Math.random()*3)
        const redShip = document.createElement('img');
        redShip.src = spaceshipType[selectType];
        redShip.style.width = "50px";
        redShip.style.height = "50px";
        redShip.style.position = "relative";
        redShip.style.left = "0";
        redShip.style.top = "0";

        this.shipElement = redShip

        

        redShip.addEventListener("click", () => {
            activeShip = this
        })

        document.body.appendChild(redShip);
    }

    moveShip(direction) {
            if (direction == "right") {
                const oldLeft = parseInt(this.shipElement.style.left)
                this.shipElement.style.left = oldLeft + 10 + "px"
            }
            else if (direction == "left") {
                const oldLeft = parseInt(this.shipElement.style.left)
                this.shipElement.style.left = oldLeft - 10 + "px"
                }
            else if (direction == "up") {
                const oldTop = parseInt(this.shipElement.style.top)
                this.shipElement.style.top = oldTop - 10 + "px"
                }
            else if (direction == "down") {
                const oldTop = parseInt(this.shipElement.style.top)
                this.shipElement.style.top = oldTop + 10 + "px"
                }

    }
}

export default Spaceship;
export {activeShip}
