import { Characters, XY, VP } from '../types'
import { TileMap } from '../TileMap'

class Cell {
    x: number
    y: number
    vp: VP

    color: string
    shape: 'rect' | 'circle' = 'rect'

    constructor(position: XY, character: Characters, vp: VP) {
        const [x, y] = position
        this.x = x
        this.y = y
        this.vp = vp

        let color = 'gray'
        switch (character) {
            case 'P':
                color = TileMap[character].color
                this.shape = 'circle'
                break
            case 'X':
            case 'K':
            case 'D':
            case ' ':
                color = TileMap[character].color
                break
        }
        this.color = color
    }

    draw(context: CanvasRenderingContext2D) {
        const { blockSize }  = this.vp
        context.beginPath()

        // Tile background
        context.fillStyle = 'white'
        context.fillRect(this.x, this.y, blockSize, blockSize)

        // Tile foreground
        context.fillStyle = this.color
        if (this.shape === 'circle') {
            context.ellipse(this.x + blockSize / 2, this.y + blockSize / 2, blockSize / 2, blockSize / 2, Math.PI * 2, 0, 2 * Math.PI * 2);
        } else {
            context.fillRect(this.x, this.y, blockSize, blockSize)
        }

        context.fill()
        context.closePath()
    }
}

export default Cell
