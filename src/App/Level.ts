import { Grid, GridRow, XY, Characters, VP } from '../types'
import { TileMap } from '../TileMap'
import Cell from './Cell'

class Level {
    name: string
    grid: Grid
    vp: VP

    // TODO
    items = {
        key1: false
    }

    constructor(props: { grid: Grid, name: string, vp: VP }) {
        const { grid, name, vp } = props
        this.grid = grid
        this.name = name
        this.vp = vp
    }

    draw(context: CanvasRenderingContext2D) {
        const {charX, charY} = this.getCurrentPosition('P')

        this.grid
            .filter((row: GridRow, rowIndex: number) => {
                return rowIndex >= (charY - this.vp.vPad) && rowIndex <= (charY + this.vp.vPad)
            })
            .map((row: Characters[], rowIndex: number) => {
                const v = this.getVPad(rowIndex, charY)
                return row
                    .filter((character: Characters, cellIndex: number) => {
                        return cellIndex >= (charX - this.vp.hPad) && cellIndex <= (charX + this.vp.hPad)
                    })
                    .map((character: Characters, cellIndex: number) => {
                        const h = this.getHPad(cellIndex, charX)
                        const newCell = new Cell([h, v], character, this.vp)
                        newCell.draw(context)
                    })
            })
    }

    getCurrentPosition(character: Characters) {
        const charY = this.grid.findIndex(row => row.includes(character))
        const charX = this.grid[charY].findIndex(c => c === character)
        return { charX, charY }
    }

    getTargetPosition(direction: XY, characterPosition: XY) {
        const [moveX, moveY] = direction
        const [currentX, currentY] = characterPosition
        let targetX = currentX
        let targetY = currentY

        // Vertical (y)
        if (moveY !== 0) {
            targetY = currentY + moveY
        }

        // Horizontal (x)
        if (moveX !== 0) {
            targetX = currentX + moveX
        }

        return { targetX, targetY }
    }

    getVPad(rowIndex: number, charY: number) {
        let v = rowIndex * this.vp.blockSize
        for (let index = 0; index < this.vp.vPad; index++) {
            if (charY === index) {
                return (rowIndex + (this.vp.vPad - index)) * this.vp.blockSize
            }
        }
        return v
    }
    
    getHPad(cellIndex: number, charX: number) {
        let h = cellIndex * this.vp.blockSize
        for (let index = 0; index < this.vp.hPad; index++) {
            if (charX === index) {
                return (cellIndex + (this.vp.hPad - index)) * this.vp.blockSize
            }
        }
        return h
    }

    moveCharacter(character: Characters, direction: XY) {
        const {charX, charY} = this.getCurrentPosition(character)
        const {targetX, targetY} = this.getTargetPosition(direction, [charX, charY])

        // TODO change direction player is facing, even if it's just a variable
        // ...

        // Stay within bounds of grid
        if (targetX < 0 || targetY < 0 || targetX > this.grid[0].length - 1 || targetY > this.grid.length - 1) {
            return
        }

        const whatsThere = this.grid[targetY][targetX]

        // Move to target position
        if (whatsThere === ' ') {
            this.grid[charY][charX] = ' '
            this.grid[targetY][targetX] = 'P'
            return
        }

        if (whatsThere in TileMap) {
            // Pick up a key > change to pick 'something' up
            if (whatsThere === 'K') {
                this.items.key1 = true
                this.grid[charY][charX] = ' '
                this.grid[targetY][targetX] = 'P'
            }
            // Open door with a key
            if (whatsThere === 'D' && this.items.key1 === true) {
                this.grid[charY][charX] = ' '
                this.grid[targetY][targetX] = 'P'
            }

            if (whatsThere === '2') {
                // this.inventory.key = true
                // this.grid[charY][charX] = ' '
                // this.grid[targetY][targetX] = 'P'
            }
        }
    }
}

export default Level
