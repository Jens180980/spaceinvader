// General imports
import { canvas, ctx } from '../main.js'

export const invaderWidth = 50
export const invaderHeight = 50
export const enemyAmount = 10
export const invadersWidth = invaderWidth * enemyAmount

//Creating array of invaders
export let invadersArr = []



//Class for creating invaders
export class Invader {
    constructor(posX, posY) {
        this.position = {
            x: posX,
            y: posY
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        
        const invaderImg = new Image()
        invaderImg.src = './Img/invader.svg'
        this.image = invaderImg

        this.width = invaderWidth
        this.height = invaderHeight
        this.timer = 0
    }
    
    draw() {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {

        //Iterating draw method on array-items
        invadersArr.map( item => {
            item.draw()
        })

        //Invader boundary control
        if(this.position.x > canvas.width) {
            this.direction = 'right'
        }
        if(this.position.x < 0 + (this.width * invadersArr.length)) {
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

        invadersArr = []
        }
    }

    for(let i = 0; i < enemyAmount; i++ ) {
        invadersArr.push(new Invader(50, 0))
        // this.position.x += this.width
    }

    const test = new Invader(50, 0)

    console.log(invadersArr);










