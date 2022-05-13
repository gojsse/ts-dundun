import Map001 from '../data/maps/001';
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
            this.currentMap.draw(this.context);
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
            vp: this.vp,
            name: 'L1',
            spriteSheet: this.tiles,
            grid: Map001,
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
            currentMap.moveCharacter(direction);
        };
    }
}
export default App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8iLCJzb3VyY2VzIjpbIkFwcC9BcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLENBQUE7QUFDckMsT0FBTyxLQUFLLE1BQU0sU0FBUyxDQUFBO0FBUzNCLE1BQU0sR0FBRztJQXlCTCxZQUFZLEVBQVUsRUFBRSxRQUFnQjtRQXBCeEMsMEJBQTBCO1FBQzFCLE9BQUUsR0FBTztZQUNMLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLEVBQUUsQ0FBQztZQUNULE1BQU0sRUFBRSxDQUFDO1lBQ1QsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQTtRQUVELE1BQU07UUFDTixXQUFNLEdBQVc7WUFDYixTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxFQUFFO1lBQ2IsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztTQUNoQixDQUFBO1FBR0QsY0FBUyxHQUFjLEVBQUUsQ0FBQTtRQTRCekIsV0FBTSxHQUFHLEdBQUcsRUFBRTtZQUNWLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUE7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBRWxFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUVsQyxVQUFVO1lBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFBO1lBQy9CLGNBQWM7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNoSixlQUFlO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEosQ0FBQyxDQUFBO1FBdENHLFNBQVM7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFzQixDQUFBO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUE7UUFFM0MsVUFBVTtRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUE2QixDQUFBO1FBRXZFLGVBQWU7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFxQixDQUFBO1FBRWxFLG9CQUFvQjtRQUNwQixNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQztZQUNqQixFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSTtZQUNWLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSztZQUN2QixJQUFJLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBRXBCLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUMvRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDakIsQ0FBQztJQWlCRCxnQkFBZ0IsQ0FBQyxVQUFpQjtRQUM5QixPQUFPLENBQUMsQ0FBZ0IsRUFBRSxFQUFFO1lBQ3hCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDakIsSUFBSSxTQUFTLEdBQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFFMUIsUUFBUSxHQUFHLEVBQUU7Z0JBQ1QsS0FBSyxTQUFTLENBQUM7Z0JBQ2YsS0FBSyxHQUFHO29CQUNKLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUNuQixNQUFLO2dCQUNULEtBQUssV0FBVyxDQUFDO2dCQUNqQixLQUFLLEdBQUc7b0JBQ0osU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO29CQUNsQixNQUFLO2dCQUNULEtBQUssWUFBWSxDQUFDO2dCQUNsQixLQUFLLEdBQUc7b0JBQ0osU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO29CQUNsQixNQUFLO2dCQUNULEtBQUssV0FBVyxDQUFDO2dCQUNqQixLQUFLLEdBQUc7b0JBQ0osU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7b0JBQ25CLE1BQUs7YUFDWjtZQUVELFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdkMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUNKO0FBRUQsZUFBZSxHQUFHLENBQUEifQ==