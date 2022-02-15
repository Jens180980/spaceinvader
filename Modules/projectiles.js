import { spaceship } from "../main.js"
import { ctx } from "../main.js"

// Key control
const keysPressed = {
    space : false
    }

//Spaceship projectiles
export class SpaceshipProjectile {
    constructor() {
        this.position = {
            x: spaceship.position.x + spaceship.width/2,
            y: spaceship.position.y
        }
        
        this.width = 5
        this.height = 10
        this.timer = 0
    }

    draw(test) {
        ctx.fillStyle = 'white'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

export class SpaceshopProjectiles {
    
    constructor() {
        this.velocity = {
            x: 0,
            y: 1
        } 
    }

    update() {

        let spaceshipProjectilesArr = []
        
        addEventListener('keydown', ({key}) => {
            if(key == ' '){
                keysPressed.space = true
                spaceshipProjectilesArr.push(new SpaceshipProjectile) 
            }
        })   

            if(keysPressed.space) {
            this.timer += 1*this.velocity.y
            spaceshipProjectilesArr.map( item => {
                console.log(item)
            })
        }
    }
}

//Invaders projectiles

