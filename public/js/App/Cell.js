import { TileList } from '../data/TileList';
import { ItemList } from '../data/ItemList';
import { CharList } from '../data/CharList';
import { EventList } from '../data/EventList';
class Cell {
    constructor({ vp, spriteSheet, position, bgTileKey, itemKey, eventKey, char }) {
        this.bgTileXy = [-1, -1];
        this.eventTileXy = [-1, -1];
        this.itemTileXy = [-1, -1];
        this.charTileXy = [-1, -1];
        const [x, y] = position;
        this.x = x;
        this.y = y;
        this.vp = vp;
        this.spriteSheet = spriteSheet;
        this.bgTileXy = TileList[bgTileKey].xy;
        this.eventTileXy = EventList[eventKey].xy;
        this.itemTileXy = ItemList[itemKey].xy;
        if (char) {
            const [charTileKey, charDirection] = char;
            this.charTileXy = CharList[charTileKey].xy;
            if (char[0] === '@') {
                if (charTileKey === '@') {
                    const cells = {
                        'n': [2, 0],
                        'e': [1, 0],
                        's': [0, 0],
                        'w': [3, 0]
                    };
                    this.charTileXy = cells[charDirection];
                }
            }
        }
    }
    draw(context) {
        const { blockSize } = this.vp;
        const [sourceX, sourceY] = this.bgTileXy;
        const [eventSourceX, eventSourceY] = this.eventTileXy;
        const [itemSourceX, itemSourceY] = this.itemTileXy;
        const [charSourceX, charSourceY] = this.charTileXy;
        context.beginPath();
        context.imageSmoothingEnabled = false;
        // Draw cell background tile
        if (sourceX > -1 && sourceY > -1) {
            context.drawImage(this.spriteSheet, sourceX * 32, sourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize);
        }
        // Draw event tile
        if (eventSourceX > -1 && eventSourceY > -1) {
            context.drawImage(this.spriteSheet, eventSourceX * 32, eventSourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize);
        }
        // Draw cell item
        if (itemSourceX > -1 && itemSourceY > -1) {
            context.drawImage(this.spriteSheet, itemSourceX * 32, itemSourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize);
        }
        // Draw cell character
        if (charSourceX > -1 && charSourceY > -1) {
            context.drawImage(this.spriteSheet, charSourceX * 32, charSourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize);
        }
        context.fill();
        context.closePath();
    }
}
export default Cell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJBcHAvQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQTtBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFZN0MsTUFBTSxJQUFJO0lBVU4sWUFBWSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBaUI7UUFMNUYsYUFBUSxHQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QixnQkFBVyxHQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMxQixlQUFVLEdBQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pCLGVBQVUsR0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFHckIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUE7UUFDdkIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNWLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFFOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxD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