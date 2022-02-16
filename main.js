// Class and constant imports
import { Spaceship, spaceshipHeight, spaceshipWidth } from './Modules/spaceship.js'
import { invadersArr } from './Modules/invaders.js'
// import { spaceshipProjectilesArr } from './Modules/projectiles.js'
// import { invaderProjectilesArr } from './Modules/projectiles.js'

// Setting canvas, dimensions and timer
export const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')
canvas.width = innerWidth,
canvas.height = innerHeight
export const spaceshipCenterX = canvas.width / 2 - spaceshipWidth 
export const spaceshipCenterY = canvas.height - spaceshipHeight

// Creating instances
export const spaceship = new Spaceship(spaceshipCenterX, spaceshipCenterY)

//Invader projectiles


//Animation Loop
function animate () {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    spaceship.update()
    invadersArr.map(item => item.update())
    // spaceshipProjectilesArr.map(item => item.update())
    // invaderProjectilesArr.map(item => item.update())
}
 animate()

 

