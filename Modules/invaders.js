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
            x: 0,
            y: 50
        }
        this.velocity = {
            x: 5,
            y: 1
        }
        this.width = 50
        this.height = 50
        this.timer = 0
        this.direction = 'left'
        this.enemyAmount = 10
    }

    update() {

        let invaderArr = []

        for(let i = 0; i < this.enemyAmount; i++ ) {
            invaderArr.push(new Character('../Img/invader.svg', this.position.x, this.position.y, this.velocity.x, this.velocity.y, this.width, this.height))
            this.position.x += this.width
        }

        invaderArr.map( item => {
            item.draw(invaderArr.length -1)
        })

        if(this.position.x > canvasWidth) {
            this.direction = 'right'
        }
        if(this.position.x < 0 + (this.width * invaderArr.length)) {
            this.direction = 'left'
        }

        if(this.direction == 'left'){
            this.timer +=1*this.velocity.x
        }
        if(this.direction == 'right'){
            this.timer -=1*this.velocity.x
        }

        this.position.x = 0 + this.timer

        invaderArr = []   
    }
}







