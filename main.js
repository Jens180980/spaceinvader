import { Character } from './characters.js'

const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const spaceshipWidth = 100
const spaceshipHeight = 100
const spaceshipVelX = 5
const spaceshipCenterX = canvas.width / 2 - spaceshipWidth 
const spaceshipCenterY = canvas.height - spaceshipHeight

const spaceship = new Character('./spaceship.png', spaceshipCenterX, spaceshipCenterY, spaceshipVelX, 0, spaceshipWidth, spaceshipHeight)

addEventListener('keydown', ({key}) => {
    switch(key) {
        case 'a' : spaceship.position.x -= spaceship.velocity.x
        break
        case 'd' : spaceship.position.x += spaceship.velocity.x
        break
        case ' ' : console.log('shoot')
    }
})

function animate () {
    requestAnimationFrame(animate)
    spaceship.update()
}

animate()


