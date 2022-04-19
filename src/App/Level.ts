import { TileRow, TileKeys, CharKeys, CharCell, CharRow, GridLayers, Direction, XY, XYD, VP } from '../types'
import { ItemList } from '../data/ItemList'
import { CharList } from '../data/CharList'
import { EventList } from '../data/EventList'
import Cell from './Cell'

interface LevelInterface {
    name: string,
    vp: VP,
    spriteSheet: HTMLImageElement,
    gridLayers: GridLayers
}

class Level {
    name
    vp
    spriteSheet
    gridLayers

    constructor(levelProps: LevelInterface) {
        const { name, gridLayers, vp, spriteSheet } = levelProps
        this.name = name
        this.vp = vp
        this.spriteSheet = spriteSheet
        this.gridLayers = gridLayers
    }

    draw(context: CanvasRenderingContext2D) {
        const [charCol, charRow, charDirection] = this.getCurrentPosition('@')

        const rowRange = [
            charRow - this.vp.rowPad,
            charRow + this.vp.rowPad
        ]

        const colRange = [
            charCol - this.vp.colPad,
            charCol + this.vp.colPad
        ]

        this.gridLayers.tiles
            .forEach((row: TileRow, rowIndex: number) => {
                const y = (rowIndex - rowRange[0]) * this.vp.blockSize
                row.forEach((tile: TileKeys, colIndex: number) => {
                    const x = (colIndex - colRange[0]) * this.vp.blockSize
                    const newCell = new Cell({
                        vp: this.vp,
                        spriteSheet: this.spriteSheet,
                        position: [x, y],
                        bgTileKey: tile,
                        itemKey: this.gridLayers.items[rowIndex][colIndex],
                        eventKey: this.gridLayers.events[rowIndex][colIndex],
                        char: this.gridLayers.chars[rowIndex][colIndex],
                    })
                    newCell.draw(context)
                })
            })
    }

    getCurrentPosition(character: CharKeys): XYD {
        let charCol = -1
        let charDirection: Direction = 's'
        const charRow = this.gridLayers.chars.findIndex((row: CharRow, rowIndex: number) => {
            const colIndex = row.findIndex((c: CharCell) => {
                return c[0] === character
            })

            if (colIndex !== -1) {
                charCol = colIndex
                charDirection = this.gridLayers.chars[rowIndex][colIndex][1]
                return true
            }
        })
        
        return [charCol, charRow, charDirection]
    }

    getTargetPosition(direction: XY, characterPosition: XY): XY {
        const [moveX, moveY] = direction
        const [charCol, charRow] = characterPosition
        let targetRow = moveY !== 0 ? charRow + moveY : charRow
        let targetCol = moveX !== 0 ? charCol + moveX : charCol

        return [targetCol, targetRow]        
    }

    moveCharacter(direction: XY) {
        const [charCol, charRow, charDirection] = this.getCurrentPosition('@')
        const [targetCol, targetRow] = this.getTargetPosition(direction, [charCol, charRow])
        let newDirection = charDirection

        if (direction[0] === -1) {
            newDirection = 'w'
        } else if (direction[0] === 1) {
            newDirection = 'e'
        } else if (direction[1] === -1) {
            newDirection = 'n'
        } else if (direction[1] === 1) {
            newDirection = 's'
        }

        // Change direction player faces
        if (charDirection !== newDirection) {
            this.gridLayers.chars[charRow][charCol] = ['@', newDirection]
            return
        }

        // Stay within bounds
        if (targetCol < 0 || targetCol > this.gridLayers.events[0].length - 1 || targetRow < 0 || targetRow > this.gridLayers.events.length - 1) {
            return
        }

        // Deterine what's at the target space character wants to move
        const whatsAtRowCol = this.gridLayers.events[targetRow][targetCol]
        const whatsCharAtRowCol = this.gridLayers.chars[targetRow][targetCol][0]
        const whatsItemAtRowCol = this.gridLayers.items[targetRow][targetCol]
        const whatEventAtRowCol = this.gridLayers.events[targetRow][targetCol]

        if (whatEventAtRowCol !== ' ') {
            console.log(EventList[whatEventAtRowCol].dialog[0])
        }

        if (whatsItemAtRowCol !== ' ') {
            console.log(ItemList[whatsItemAtRowCol].info)
        }

        if (whatsCharAtRowCol !== ' ') {
            console.log(CharList[whatsCharAtRowCol].dialog[0])
        }

        // Move to target position if possible
        if (whatsAtRowCol !== 'X' && whatsCharAtRowCol === ' ') {
            this.gridLayers.chars[charRow][charCol] = [' ', 's']
            this.gridLayers.chars[targetRow][targetCol] = ['@', newDirection]
            return
        }
    }
}

export default Level
