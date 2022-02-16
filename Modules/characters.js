// General imports
import { ctx } from '../main.js'

// General class for creatig game characters
export class Character {
    constructor(src, posX, posY, velX, VelY, width, height) {
        this.position = {
            x: posX,
            y: posY
        }
        this.velocity = {
            x: velX,
            y: VelY
        }
        
        const characterImg = new Image()
        characterImg.src = src
        this.image = characterImg

        this.width = width
        this.height = height
    }

    draw(loopCount) {
        for(let i=0; i<loopCount; i++) {
            if (this.image)
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
    }
}

