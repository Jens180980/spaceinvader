// Constant and Class imports
import { canvas, ctx } from '../main.js'

//Constant exports
export const spaceshipWidth = 100
export const spaceshipHeight = 100
export const spaceshipVelX = 0

// Key control
const keysPressed = {
    a: false,
    d: false,
    }

// Creates your spaceship
export class Spaceship{
    constructor(posX, posY) {
        this.position = {
            x: posX,
            y: posY
        }
        this.velocity = {
            x: spaceshipVelX,
            y: 0
        }
        
        const spaceshipImg = new Image()
        spaceshipImg.src = './Img/spaceship.svg'
        this.image = spaceshipImg

        this.width = spaceshipWidth
        this.height = spaceshipHeight
    }

    draw(loopCount) {
        for(let i=0; i<loopCount; i++) {
            if (this.image)
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }

    update() {
       this.draw(1)
       
       addEventListener('keydown', ({key}) => {
            switch(key) {
                case 'a' : keysPressed.a = true
                break
                case 'd' : keysPressed.d = true
            }
        })

        addEventListener('keyup', ({key}) => {
            switch(key) {
                case 'a' : keysPressed.a = false
                break
                case 'd' : keysPressed.d = false
            }
        })  

        //Moves player to the left or right, as long as "a" or "d" is pressed
 
            if(keysPressed.a && this.position.x > 0) {
                this.velocity.x = -10
            } else if (keysPressed.d && this.position.x < canvas.width - spaceshipWidth) {
                this.velocity.x = 10
            } else {
                this.velocity.x = 0
            }   

        // Moves player velocity.x-value for every update
       this.position.x += this.velocity.x 
    }
}
