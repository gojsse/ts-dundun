import { CharKeys, CharCell, CharRow, GridCell, GridRow, Grid, Direction, XY, XYD, VP } from '../types'
import { ItemList } from '../data/ItemList'
import { CharList } from '../data/CharList'
import { ActionList } from '../data/ActionList'
import Cell from './Cell'
import SFX from './SFX'

interface LevelInterface {
    name: string,
    vp: VP,
    spriteSheet: HTMLImageElement,
    grid: Grid
}

class Level {
    name
    vp
    spriteSheet
    grid

    constructor(levelProps: LevelInterface) {
        const { name, vp, spriteSheet, grid } = levelProps
        this.name = name
        this.vp = vp
        this.spriteSheet = spriteSheet
        this.grid = grid
    }

    draw(context: CanvasRenderingContext2D) {
        const [charCol, charRow] = this.getCurrentPosition('@')

        const rowRange = [
            charRow - this.vp.rowPad,
            charRow + this.vp.rowPad
        ]

        const colRange = [
            charCol - this.vp.colPad,
            charCol + this.vp.colPad
        ]

        this.grid
            .forEach((row: GridRow, rowIndex: number) => {
                const y = (rowIndex - rowRange[0]) * this.vp.blockSize
                row.forEach((cell: GridCell, colIndex: number) => {
                    const x = (colIndex - colRange[0]) * this.vp.blockSize
                    const newCell = new Cell({
                        vp: this.vp,
                        spriteSheet: this.spriteSheet,
                        position: [x, y],
                        tileStack: cell
                    })
                    newCell.draw(context)
                })
            })
    }

    getCurrentPosition(character: CharKeys): XYD {
        let charCol = -1
        let charDirection: Direction = 's'
        const charRow = this.grid.findIndex((row: GridRow, rowIndex: number) => {
            const colIndex = row.findIndex((c: GridCell) => {
                return c.char[0] === character
            })

            if (colIndex !== -1) {
                charCol = colIndex
                charDirection = this.grid[rowIndex][colIndex].char[1]
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
            this.grid[charRow][charCol].char = ['@', newDirection]
            return
        }

        // Stay within bounds
        if (targetCol < 0 || targetCol > this.grid[0].length - 1 || targetRow < 0 || targetRow > this.grid.length - 1) {
            return
        }

        // Deterine what's at the target space character wants to move
        const targetRowCol = this.grid[targetRow][targetCol]

        if (targetRowCol.bg !== ' ') {
            const { sfx } = ActionList[targetRowCol.action]
            if (sfx) {
                const sound = new SFX({ src: sfx })
                sound.play()
            }
        }

        if (targetRowCol.item !== ' ') {
            console.log(ItemList[targetRowCol.item].info)
        }

        if (targetRowCol.char[0] !== ' ') {
            console.log(CharList[targetRowCol.char[0]].dialog[0])
        }

        // Move to target position if possible
        if (targetRowCol.action !== 'X' && targetRowCol.char[0] === ' ') {
            this.grid[charRow][charCol].char = [' ', 's']
            this.grid[targetRow][targetCol].char = ['@', newDirection]
            return
        }
    }
}

export default Level
