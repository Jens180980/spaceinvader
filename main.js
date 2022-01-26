// Class and constant imports
import { Spaceship, spaceshipHeight, spaceshipWidth } from './Modules/spaceship.js'
import { InvaderGrid } from './Modules/invaders.js'

// Setting canvas, dimensions and timer
const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')
canvas.width = innerWidth,
canvas.height = innerHeight
export const spaceshipCenterX = canvas.width / 2 - spaceshipWidth 
export const spaceshipCenterY = canvas.height - spaceshipHeight
let frameCount = 0
let timer = 100


// Creating player-spaceship and alien invader instance
const spaceship = new Spaceship()
const invaders = new InvaderGrid()



//Animation Loop
function animate () {
    requestAnimationFrame(animate)
    frameCount += 1
    if(frameCount % 50 === 0) {
        timer += 50
    }
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    invaders.invaderArr.map((item, index) => {
        item.update(index*50+timer, 100)
    })
    spaceship.update()
}
 animate()

