import { TileGrid, TileRow, TileCharacters, EventGrid, EventRow, EventCharacters, XY, VP } from '../types'
import { TileMap } from '../TileMap'
import Cell from './Cell'

interface LevelInterface {
    name: string,
    tileGrid: TileGrid,
    eventGrid: EventGrid,
    vp: VP,
    tileSet: HTMLImageElement
}

class Level {
    name
    tileGrid
    eventGrid
    vp
    tileSet

    constructor(levelProps: LevelInterface) {
        const { name, tileGrid, eventGrid, vp, tileSet } = levelProps
        this.name = name
        this.tileGrid = tileGrid
        this.eventGrid = eventGrid
        this.vp = vp
        this.tileSet = tileSet
    }

    draw(context: CanvasRenderingContext2D) {
        const {charRow, charCol} = this.getCurrentPosition('@')

        const rowRange = [
            charRow - this.vp.rowPad,
            charRow + this.vp.rowPad
        ]

        const colRange = [
            charCol - this.vp.colPad,
            charCol + this.vp.colPad
        ]

        this.tileGrid
            .forEach((row: TileRow, rowIndex: number) => {
                const y = (rowIndex - rowRange[0]) * this.vp.blockSize
                row.forEach((character: TileCharacters, colIndex: number) => {
                    const x = (colIndex - colRange[0]) * this.vp.blockSize
                    const newCell = new Cell({
                        position: [x, y],
                        tileCharacter: character,
                        eventCharacter: this.eventGrid[rowIndex][colIndex],
                        vp: this.vp,
                        tileSet: this.tileSet
                    })
                    newCell.draw(context)
                })
            })
    }

    getCurrentPosition(character: EventCharacters) {
        const charRow = this.eventGrid.findIndex((row: EventRow) => row.includes(character))
        const charCol = this.eventGrid[charRow].findIndex((c: EventCharacters) => c === character)
        return { charRow, charCol }
    }

    getTargetPosition(direction: XY, characterPosition: XY) {
        const [moveX, moveY] = direction
        const [charCol, charRow] = characterPosition
        let targetRow = moveY !== 0 ? charRow + moveY : charRow
        let targetCol = moveX !== 0 ? charCol + moveX : charCol
        return  { targetRow, targetCol }
    }

    moveCharacter(character: EventCharacters, direction: XY) {
        const {charRow, charCol} = this.getCurrentPosition(character)
        const {targetRow, targetCol} = this.getTargetPosition(direction, [charCol, charRow])

        // TODO change direction player is facing, even if it's just a variable
        // ...

        // Stay within bounds
        if (targetCol < 0 || targetCol > this.eventGrid[0].length - 1 || targetRow < 0 || targetRow > this.eventGrid.length - 1) {
            return
        }

        const whatsThere = this.eventGrid[targetRow][targetCol]

        // Move to target position
        if (whatsThere === ' ') {
            this.eventGrid[charRow][charCol] = ' '
            this.eventGrid[targetRow][targetCol] = '@'
            return
        }

        if (whatsThere in TileMap) {
        //     // Pick up a key > change to pick 'something' up
        //     if (whatsThere === 'K') {
        //         this.items.key1 = true
        //         this.tileGrid[charY][charX] = ' '
        //         this.tileGrid[targetY][targetX] = '@'
        //     }
        //     // Open door with a key
        //     if (whatsThere === 'D' && this.items.key1 === true) {
        //         this.tileGrid[charY][charX] = ' '
        //         this.tileGrid[targetY][targetX] = '@'
        //     }

        //     if (whatsThere === '2') {
        //         // this.inventory.key = true
        //         // this.grid[charY][charX] = ' '
        //         // this.grid[targetY][targetX] = '@'
        //     }
        }
    }
}

export default Level
