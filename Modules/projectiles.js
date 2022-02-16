import { ctx } from "../main.js"
import { spaceship } from "../main.js"
import { spaceshipWidth } from "./spaceship.js"
import { invaders } from "../main.js"
import { invadersWidth, invaderHeight } from "./invaders.js"

//General projectile class
export class Projectile {
    constructor(posX, posY, velY, shotDirection) {
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
        this.shotDirection = shotDirection

    }

    draw() {
            ctx.fillStyle = 'white'
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
            this.position.y += this.timer - 1*this.velocity.y * this.shotDirection
    }
}

//Spaceship projectiles
export const spaceshipProjectilesArr = []
const spaceshipProjectileVel = 30

addEventListener('keydown', ({key}) => {
    if(key == ' ') {
        spaceshipProjectilesArr.push(new Projectile(spaceship.position.x + spaceshipWidth/2, spaceship.position.y, spaceshipProjectileVel, 1))
    }
})

//Invader projectiles
export const invaderProjectilesArr = []
const invaderProjectilesVel = 10
const firingInterval = 2000
let randomFire


setInterval( () => {
    randomFire = Math.random() * (invadersWidth)
    invaderProjectilesArr.push(new Projectile(invaders.position.x + randomFire, invaders.position.y + invaderHeight, invaderProjectilesVel, -1))
}, firingInterval)



