import { Grid, XY, VP, Inventory } from '../types'
import Level from './Level'

class App {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D

    currentMap: Level
    inventory: Inventory = {}

    // Viewport
    vp: VP = {
        h: 7,
        w: 7,
        hPad: 3,
        vPad: 3,
        blockSize: 32
    }

    constructor(id: string) {
        // Canvas
        const canvas = document.getElementById(id) as HTMLCanvasElement
        this.canvas = canvas
        this.canvas.height = this.vp.blockSize * this.vp.h
        this.canvas.width = this.vp.blockSize * this.vp.w
        this.canvas.style.border = '4px solid blue'

        // Context
        const context = canvas.getContext('2d') as CanvasRenderingContext2D
        this.context = context

        const level1Grid: Grid = [
            [' ', ' ', 'X', 'X', 'X', 'X', ' ', ' '],
            [' ', 'P', ' ', 'X', ' ', ' ', ' ', ' '],
            ['X', ' ', ' ', 'X', ' ', 'U', ' ', 'X'],
            ['X', ' ', 'X', 'X', ' ', ' ', ' ', 'X'],
            ['X', ' ', 'X', 'X', 'X', 'D', 'X', 'X'],
            ['X', ' ', 'X', 'X', 'X', ' ', 'X', 'X'],
            ['X', ' ', ' ', 'K', ' ', ' ', ' ', 'X'],
            ['X', ' ', 'X', 'X', 'X', 'X', ' ', ' '],
            ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ['X', 'X', 'X', 'X', 'X', 'X', 'X', ' '],
            ['X', '2', ' ', 'X', 'X', 'X', 'X', ' '],
            ['X', ' ', ' ', 'X', 'X', 'X', 'X', ' '],
            ['X', ' ', ' ', 'X', 'X', 'X', 'X', ' '],
            ['X', 'X', ' ', ' ', ' ', ' ', ' ', ' '],
        ]

        const l1 = new Level({
            name: 'L1',
            grid: level1Grid,
            vp: this.vp
        })
        this.currentMap = l1
        this.canvas.addEventListener('keydown', this.createUserEvents(this.currentMap))
        this.redraw()
    }

    redraw = () => {
        requestAnimationFrame(this.redraw)
        this.context.fillStyle = 'blue'
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
        
        // TODO
        // this.gui.draw(this.context)
        // the GUI
        
        // TODO how to throttle map refresh rate
        this.currentMap.draw(this.context)
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
                case 'a':
                    direction = [-1, 0]
                    break
            }

            currentMap.moveCharacter('P', direction)
        }
    }
}

export default App
