// General imports
import  { Character } from './characters.js'
import { canvasWidth } from '../main.js'

//Class for creating invaders
export class Invader extends Character {
    constructor() {
        super('../Img/invaders.svg', posX, posY, velX, velY, 50, 50)
    }
}

export class Invaders {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 5,
            y: 0
        }
        this.timer = 0
    }

    update() {
        
        let invaderArr = []

        for(let i = 0; i < 10; i++ ) {
            invaderArr.push(new Character('../Img/invader.svg', this.position.x, this.position.y, this.velocity.x, this.velocity.y, 50, 50))
            this.position.x += 50
        }

        invaderArr.map((item) => {
            item.draw(invaderArr.length -1)
        })

        invaderArr = []
        
    }
}







