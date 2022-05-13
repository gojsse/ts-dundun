import { GridCell, XY, VP, Direction } from '../types'
import { BgList } from '../data/BgList'
import { ItemList } from '../data/ItemList'
import { CharList } from '../data/CharList'
import { ActionList } from '../data/ActionList'

interface CellInterface {
    vp: VP
    spriteSheet: HTMLImageElement
    position: XY,
    tileStack: GridCell
}

class Cell {
    vp
    spriteSheet
    x
    y
    bgTileXy: XY = [-1, -1]
    actionTileXy: XY = [-1, -1]
    itemTileXy: XY = [-1, -1]
    charTileXy: XY = [-1, -1]

    constructor({ vp, spriteSheet, position, tileStack }: CellInterface) {
        const [x, y] = position
        const { bg, item, action, char } = tileStack
        this.x = x
        this.y = y
        this.vp = vp
        this.spriteSheet = spriteSheet

        this.bgTileXy = BgList[bg].xy
        this.actionTileXy = ActionList[action].xy
        this.itemTileXy = ItemList[item].xy

        if (char) {
            const [charTileKey, charDirection] = char
            this.charTileXy = CharList[charTileKey].xy
            if (char[0] === '@') {
                if (charTileKey === '@') {
                    const cells = {
                        'n': <XY>[2, 0],
                        'e': <XY>[1, 0],
                        's': <XY>[0, 0],
                        'w': <XY>[3, 0]
                    }
                    this.charTileXy = cells[charDirection]
                }
            }
        }
    }

    draw(context: CanvasRenderingContext2D) {
        const { blockSize } = this.vp
        const [sourceX, sourceY] = this.bgTileXy
        const [actionSourceX, actionSourceY] = this.actionTileXy
        const [itemSourceX, itemSourceY] = this.itemTileXy
        const [charSourceX, charSourceY] = this.charTileXy

        context.beginPath()
        context.imageSmoothingEnabled = false

        // Draw cell background tile
        if (sourceX > -1 && sourceY > -1) {
            context.drawImage(this.spriteSheet, sourceX * 32, sourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize)
        }

        // Draw event tile
        if (actionSourceX > -1 && actionSourceY > -1) {
            context.drawImage(this.spriteSheet, actionSourceX * 32, actionSourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize)
        }

        // Draw cell item
        if (itemSourceX > -1 && itemSourceY > -1) {
            context.drawImage(this.spriteSheet, itemSourceX * 32, itemSourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize)
        }

        // Draw cell character
        if (charSourceX > -1 && charSourceY > -1) {
            context.drawImage(this.spriteSheet, charSourceX * 32, charSourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize)
        }

        context.fill()
        context.closePath()
    }
}

export default Cell
