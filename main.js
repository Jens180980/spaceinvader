// Class and constant imports
import { Spaceship, spaceshipHeight, spaceshipWidth } from './Modules/spaceship.js'
import { Invaders } from './Modules/invaders.js'
import { spaceshipProjectilesArr } from './Modules/projectiles.js'
import { invaderProjectilesArr } from './Modules/projectiles.js'

// Setting canvas, dimensions and timer
const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')
canvas.width = innerWidth,
canvas.height = innerHeight
export const canvasWidth = canvas.width
export const spaceshipCenterX = canvas.width / 2 - spaceshipWidth 
export const spaceshipCenterY = canvas.height - spaceshipHeight

// Creating instances
export const spaceship = new Spaceship()
export const invaders = new Invaders()

//Invader projectiles


//Animation Loop
function animate () {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    spaceship.update()
    invaders.update()
    spaceshipProjectilesArr.map(item => item.draw())
    invaderProjectilesArr.map(item => item.draw())
}
 animate()

 

