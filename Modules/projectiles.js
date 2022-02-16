import { ctx } from "../main.js"

//General projectile class
export class Projectile {
    constructor(posX, posY, velY) {
        this.position = {
            x: posX,
            y: posY
        }
        this.velocity = {
            x: 0,
            y: velY
        } 
        
        this.width = 5
        this.height = 10
        this.timer = 0
        this.projectilesArr = []
    }

    draw() {
            ctx.fillStyle = 'white'
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
            this.position.y += this.timer - 1*this.velocity.y
    }

}



