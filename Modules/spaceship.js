// Constant and Class imports
import { Character } from './characters.js'
import { spaceshipCenterX } from '../main.js'
import { spaceshipCenterY } from '../main.js'

//Constant exports
export const spaceshipWidth = 100
export const spaceshipHeight = 100
export const spaceshipVelX = 0

// Key control
const keysPressed = {
    a: false,
    d: false,
    space : false
    }

// Creates your spaceship
export class Spaceship extends Character {
    constructor() {
        super('./Img/spaceship.svg', spaceshipCenterX, spaceshipCenterY, spaceshipVelX, 0, spaceshipWidth, spaceshipHeight)
    }

    update() {
       this.draw()
       
       addEventListener('keydown', ({key}) => {
            switch(key) {
                case 'a' : keysPressed.a = true
                break
                case 'd' : keysPressed.d = true
                break
                case ' ' : keysPressed.space = true
            }
        })

        addEventListener('keyup', ({key}) => {
            switch(key) {
                case 'a' : keysPressed.a = false
                break
                case 'd' : keysPressed.d = false
                break
                case ' ' : keysPressed.space = false
            }
        })

        //Moves player to the left or right, as long as "a" or "d" is pressed
        if(keysPressed.a === true) {
            this.velocity.x = -10
        } else if (keysPressed.d === true) {
            this.velocity.x = 10
        } else {
            this.velocity.x = 0
        }

        // Moves player velocity.x-value for every update
       this.position.x += this.velocity.x 
    }
}