import { level1TileGrid, level1EventGrid } from '../data';
import Level from './Level';
class App {
    constructor(id, sourceId) {
        // Viewport
        this.vp = {
            rows: 6,
            cols: 7,
            rowPad: 3,
            colPad: 3,
            blockSize: 32
        };
        this.panels = {
            rightRows: 9,
            rightCols: 14,
            bottomRows: 3,
            bottomCols: 7
        };
        this.inventory = {};
        this.redraw = () => {
            requestAnimationFrame(this.redraw);
            this.context.fillStyle = 'black';
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
            // TODO
            // how to throttle map refresh rate
            this.currentMap.draw(this.context);
            // TODO
            // move this stuff into separate class
            // this.gui.draw(this.context)
            // the GUI
            this.context.fillStyle = 'gray';
            // Right panel
            this.context.fillRect(this.vp.cols * this.vp.blockSize, 0, this.panels.rightCols * this.vp.blockSize, this.panels.rightRows * this.vp.blockSize);
            // Bottom panel
            this.context.fillRect(0, this.vp.rows * this.vp.blockSize, this.panels.bottomCols * this.vp.blockSize, this.panels.bottomRows * this.vp.blockSize);
        };
        // Canvas
        this.canvas = document.getElementById(id);
        this.canvas.height = this.vp.blockSize * (this.vp.rows + 3);
        this.canvas.width = this.vp.blockSize * (this.vp.cols + 7);
        this.canvas.style.border = '1px solid gray';
        // Context
        this.context = this.canvas.getContext('2d');
        // Source Tiles
        this.tiles = document.getElementById(sourceId);
        // Setup initial map
        const l1 = new Level({
            name: 'L1',
            tileGrid: level1TileGrid,
            eventGrid: level1EventGrid,
            vp: this.vp,
            tileSet: this.tiles
        });
        this.currentMap = l1;
        this.canvas.addEventListener('keydown', this.createUserEvents(this.currentMap));
        this.redraw();
    }
    createUserEvents(currentMap) {
        return (e) => {
            const { key } = e;
            let direction = [0, 0];
            switch (key) {
                case 'ArrowUp':
                case 'w':
                    direction = [0, -1];
                    break;
                case 'ArrowDown':
                case 's':
                    direction = [0, 1];
                    break;
                case 'ArrowRight':
                case 'd':
                    direction = [1, 0];
                    break;
                case 'ArrowLeft':
                case '_':
                    direction = [-1, 0];
                    break;
            }
            currentMap.moveCharacter('@', direction);
        };
    }
}
export default App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8iLCJzb3VyY2VzIjpbIkFwcC9BcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUE7QUFDekQsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFBO0FBUzNCLE1BQU0sR0FBRztJQXdCTCxZQUFZLEVBQVUsRUFBRSxRQUFnQjtRQW5CeEMsV0FBVztRQUNYLE9BQUUsR0FBTztZQUNMLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQTtRQUVELFdBQU0sR0FBVztZQUNiLFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLEVBQUU7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBRSxDQUFDO1NBQ2hCLENBQUE7UUFHRCxjQUFTLEdBQWMsRUFBRSxDQUFBO1FBNkJ6QixXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1YscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQTtZQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7WUFFbEUsT0FBTztZQUNQLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFFbEMsT0FBTztZQUNQLHNDQUFzQztZQUN0Qyw4QkFBOEI7WUFDOUIsVUFBVTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0s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