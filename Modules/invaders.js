// General imports
import  { Character } from './characters.js'
import { canvas } from '../main.js'

export const invaderWidth = 50
export const invaderHeight = 50
export const enemyAmount = 10
export const invadersWidth = invaderWidth * enemyAmount


//Class for creating invaders
export class Invader extends Character {
    constructor() {
        super('../Img/invaders.svg', posX, posY, velX, velY, 50, 50)
    }
}

//Class for creating line of invaders
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
        this.width = invaderWidth
        this.height = invaderHeight
        this.timer = 0
        this.direction = 'left'
        this.enemyAmount = enemyAmount
    }

    update() {

        //Creating array of invaders
        let invaderArr = []
        for(let i = 0; i < enemyAmount; i++ ) {
            invaderArr.push(new Character('../Img/invader.svg', this.position.x, this.position.y, this.velocity.x, this.velocity.y, this.width, this.height))
            this.position.x += this.width
        }

        //Iterating draw method on array-items
        invaderArr.map( item => {
            item.draw(invaderArr.length -1)
        })

        //Invader boundary control
        if(this.position.x > canvas.width) {
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

        //Positioning
        this.position.x = 0 + this.timer

        //Resetting array
        invaderArr = []   
    }
}







