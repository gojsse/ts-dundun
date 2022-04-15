import { TileCharacters, EventCharacters, XY, VP, Direction } from '../types'
// import { TileMap } from '../TileMap'

interface CellInterface {
    position: XY,
    tileCharacter: TileCharacters,
    eventCharacter: EventCharacters,
    vp: VP
    tileSet: HTMLImageElement
    playerDirection: Direction
}

type CellShapeTypes = 'rect' | 'circle'

class Cell {
    x
    y
    vp
    tileSet
    tileSourceCoords: XY = [-1, -1]
    charSourceCoords: XY = [-1, -1]
    // color: string = 'gray'
    shape: CellShapeTypes = 'rect'

    constructor({ position, tileCharacter, eventCharacter, vp, tileSet, playerDirection }: CellInterface) {
        const [x, y] = position
        this.x = x
        this.y = y
        this.vp = vp
        this.tileSet = tileSet

        switch (tileCharacter) {
            case '~':
                this.tileSourceCoords = [0, 14]
                break
            case '*':
                this.tileSourceCoords = [1, 14]
                break
            case 'B':
                this.tileSourceCoords = [1, 5]
                break
            case 'Q':
                this.tileSourceCoords = [0, 13]
                break
            case 'd':
                this.tileSourceCoords = [0, 6]
                break
            case 'u':
                this.tileSourceCoords = [99, 99]
                break
            case '0':
                this.tileSourceCoords = [0, 8]
                break
            case '1':
                this.tileSourceCoords = [1, 11]
                break
            case '_':
                this.tileSourceCoords = [0, 11]
                break
        }

        // 
        switch (eventCharacter) {
            case '@':
                console.log('playerDirection', playerDirection)
                const cells = {
                    'n': <XY>[2, 0],
                    'e': <XY>[1, 0],
                    's': <XY>[0, 0],
                    'w': <XY>[3, 0]
                }
                this.charSourceCoords = cells[playerDirection]
                break
            case 'K':
                this.charSourceCoords = [5, 2]
                break
            case 'H':
                this.charSourceCoords = [0, 3]
                break
        }
    }

    draw(context: CanvasRenderingContext2D) {
        const { blockSize } = this.vp
        const [sourceX, sourceY] = this.tileSourceCoords
        const [charSourceX, charSourceY] = this.charSourceCoords
        context.beginPath()

        // Fill background
        context.fillStyle = 'white'
        context.fillRect(this.x, this.y, blockSize, blockSize)

        // Draw tile background
        if (sourceX > -1 && sourceY > -1) {
            context.imageSmoothingEnabled = false;
            context.drawImage(this.tileSet, sourceX * 32, sourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize);
        }

        // Draw char on next layer
        if (charSourceX > -1 && charSourceY > -1) {
            context.imageSmoothingEnabled = false;
            context.drawImage(this.tileSet, charSourceX * 32, charSourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize);
        }

        context.fill()
        context.closePath()
    }
}

export default Cell
