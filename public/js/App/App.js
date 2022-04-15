import { level1TileGrid, level1EventGrid } from '../data';
import Level from './Level';
class App {
    constructor(id, sourceId) {
        // Map screen (V)iew(P)ort
        this.vp = {
            rows: 6,
            cols: 7,
            rowPad: 3,
            colPad: 3,
            blockSize: 32
        };
        // GUI
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
            tileSet: this.tiles,
            playerDirection: 's'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8iLCJzb3VyY2VzIjpbIkFwcC9BcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUE7QUFDekQsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFBO0FBUzNCLE1BQU0sR0FBRztJQXlCTCxZQUFZLEVBQVUsRUFBRSxRQUFnQjtRQXBCeEMsMEJBQTBCO1FBQzFCLE9BQUUsR0FBTztZQUNMLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQTtRQUVELE1BQU07UUFDTixXQUFNLEdBQVc7WUFDYixTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxFQUFFO1lBQ2IsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztTQUNoQixDQUFBO1FBR0QsY0FBUyxHQUFjLEVBQUUsQ0FBQTtRQThCekIsV0FBTSxHQUFHLEdBQUcsRUFBRTtZQUNWLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUE7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRWxFLE9BQU87WUFDUCxtQ0FBbUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRWxDLE9BQU87WUFDUCxzQ0FBc0M7WUFDdEMsOEJBQThCO1lBQzlCLFVBQVU7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLFNB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