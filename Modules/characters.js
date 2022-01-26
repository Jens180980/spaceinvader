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

    draw(posX, posY) {
        if (this.image)
        ctx.drawImage(this.image, !posX ? this.position.x : posX, !posY ? this.position.y : posY, this.width, this.height)
    }

}

