import { TileCharacters, EventCharacters, XY, VP } from '../types'
// import { TileMap } from '../TileMap'

interface CellInterface {
    position: XY,
    tileCharacter: TileCharacters,
    eventCharacter: EventCharacters,
    vp: VP
    tileSet: HTMLImageElement
}

type CellShapeTypes = 'rect' | 'circle'

class Cell {
    x
    y
    vp
    tileSet
    tileSourceCoords: XY = [-1, -1]
    charSourceCoords: XY = [-1, -1]
    color: string = 'gray'
    shape: CellShapeTypes = 'rect'

    constructor({ position, tileCharacter, eventCharacter, vp, tileSet }: CellInterface) {
        const [x, y] = position
        this.x = x
        this.y = y
        this.vp = vp
        this.tileSet = tileSet

        switch (tileCharacter) {
            case '~':
                this.tileSourceCoords = [8, 2]
                break
            case 'd':
                this.tileSourceCoords = [19, 12]
                break
            case 'u':
                this.tileSourceCoords = [18, 12]
                break
            case '0':
                this.tileSourceCoords = [7, 10]
                break
            case '1':
                this.tileSourceCoords = [7, 9]
                break
            case '_':
                this.tileSourceCoords = [7, 9]
                break
        }

        switch (eventCharacter) {
            case '@':
                this.charSourceCoords = [1, 11]
                break
            case 'K':
                this.charSourceCoords = [0, 10]
                break
        }
    }

    draw(context: CanvasRenderingContext2D) {
        const { blockSize } = this.vp
        const [sourceX, sourceY] = this.tileSourceCoords
        const [charSourceX, charSourceY] = this.charSourceCoords
        context.beginPath()

        // Tile background
        context.fillStyle = 'white'
        context.fillRect(this.x, this.y, blockSize, blockSize)

        // Tile foreground
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, blockSize, blockSize)

        if (sourceX > -1 && sourceY > -1) {
            context.imageSmoothingEnabled = false;
            context.drawImage(this.tileSet, sourceX * 16, sourceY * 16, 16, 16, this.x, this.y, blockSize, blockSize);
        }

        if (charSourceX > -1 && charSourceY > -1) {
            context.imageSmoothingEnabled = false;
            context.drawImage(this.tileSet, charSourceX * 16, charSourceY * 16, 16, 16, this.x, this.y, blockSize, blockSize);
        }

        context.fill()
        context.closePath()
    }
}

export default Cell
