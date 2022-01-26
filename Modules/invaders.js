// General imports
import  { Character } from './characters.js'
import { spaceshipCenterX } from '../main.js'

// Location constants
const spaceBetweenInvaders = 50

//Class for creating invaders
export class Invader extends Character {
    constructor(posX, posY) {
        super('../Img/invader.svg', posX, posY, 0, 0, 50, 50 )
    }

    update(posX, posY) {
        this.draw(posX, posY)
    }
}

export class InvaderGrid {
    constructor(velY) {
        this.position = {
            x: 0,
            y: 200
        }
        this.velocity = {
            x: 0,
            y: velY
        }
        this.invaderArr = []

        for (let i = 1; i < 10; i++) {
            this.position.x = i * spaceBetweenInvaders
            this.invaderArr.push(new Invader(spaceshipCenterX + this.position.x, this.position.y))
        }
    }

}


