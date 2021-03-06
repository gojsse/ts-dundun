import { BgList } from '../data/BgList';
import { ItemList } from '../data/ItemList';
import { CharList } from '../data/CharList';
import { ActionList } from '../data/ActionList';
class Cell {
    constructor({ vp, spriteSheet, position, tileStack }) {
        this.bgTileXy = [-1, -1];
        this.actionTileXy = [-1, -1];
        this.itemTileXy = [-1, -1];
        this.charTileXy = [-1, -1];
        const [x, y] = position;
        const { bg, item, action, char } = tileStack;
        this.x = x;
        this.y = y;
        this.vp = vp;
        this.spriteSheet = spriteSheet;
        this.bgTileXy = BgList[bg].xy;
        this.actionTileXy = ActionList[action].xy;
        this.itemTileXy = ItemList[item].xy;
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
        const [actionSourceX, actionSourceY] = this.actionTileXy;
        const [itemSourceX, itemSourceY] = this.itemTileXy;
        const [charSourceX, charSourceY] = this.charTileXy;
        context.beginPath();
        context.imageSmoothingEnabled = false;
        // Draw cell background tile
        if (sourceX > -1 && sourceY > -1) {
            context.drawImage(this.spriteSheet, sourceX * 32, sourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize);
        }
        // Draw event tile
        if (actionSourceX > -1 && actionSourceY > -1) {
            context.drawImage(this.spriteSheet, actionSourceX * 32, actionSourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJBcHAvQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDdkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFTL0MsTUFBTSxJQUFJO0lBVU4sWUFBWSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBaUI7UUFMbkUsYUFBUSxHQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN2QixpQkFBWSxHQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMzQixlQUFVLEdBQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pCLGVBQVUsR0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFHckIsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUE7UUFDdkIsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFDN0Is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