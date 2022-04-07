import { XY, VP, Inventory } from '../types'
import { level1TileGrid, level1EventGrid } from '../data'
import Level from './Level'

type Panels = {
    rightRows: number,
    rightCols: number,
    bottomRows: number,
    bottomCols: number
}

class App {
    canvas
    context
    tiles

    // Viewport
    vp: VP = {
        rows: 6,
        cols: 7,
        rowPad: 3,
        colPad: 3,
        blockSize: 32
    }

    panels: Panels = {
        rightRows: 9,
        rightCols: 14,
        bottomRows: 3,
        bottomCols: 7
    }

    currentMap: Level
    inventory: Inventory = {}

    constructor(id: string, sourceId: string) {
        // Canvas
        this.canvas = document.getElementById(id) as HTMLCanvasElement
        this.canvas.height = this.vp.blockSize * (this.vp.rows + 3)
        this.canvas.width = this.vp.blockSize * (this.vp.cols + 7)
        this.canvas.style.border = '1px solid gray'

        // Context
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D

        // Source Tiles
        this.tiles = document.getElementById(sourceId) as HTMLImageElement

        // Setup initial map
        const l1 = new Level({
            name: 'L1',
            tileGrid: level1TileGrid,
            eventGrid: level1EventGrid,
            vp: this.vp,
            tileSet: this.tiles
        })
        this.currentMap = l1

        this.canvas.addEventListener('keydown', this.createUserEvents(this.currentMap))
        this.redraw()
    }

    redraw = () => {
        requestAnimationFrame(this.redraw)
        this.context.fillStyle = 'black'
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
                
        // TODO
        // how to throttle map refresh rate
        this.currentMap.draw(this.context)

        // TODO
        // move this stuff into separate class
        // this.gui.draw(this.context)
        // the GUI
        this.context.fillStyle = 'gray'
        // Right panel
        this.context.fillRect(this.vp.cols * this.vp.blockSize, 0, this.panels.rightCols * this.vp.blockSize, this.panels.rightRows * this.vp.blockSize)
        // Bottom panel
        this.context.fillRect(0, this.vp.rows * this.vp.blockSize, this.panels.bottomCols * this.vp.blockSize, this.panels.bottomRows * this.vp.blockSize)
    }

    createUserEvents(currentMap: Level) {
        return (e: KeyboardEvent) => {
            const { key } = e
            let direction: XY = [0, 0]

            switch (key) {
                case 'ArrowUp':
                case 'w':
                    direction = [0, -1]
                    break
                case 'ArrowDown':
                case 's':
                    direction = [0, 1]
                    break
                case 'ArrowRight':
                case 'd':
                    direction = [1, 0]
                    break
                case 'ArrowLeft':
                case '_':
                    direction = [-1, 0]
                    break
            }

            currentMap.moveCharacter('@', direction)
        }
    }
}

export default App
