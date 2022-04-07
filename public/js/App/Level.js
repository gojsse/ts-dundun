import { TileMap } from '../TileMap';
import Cell from './Cell';
class Level {
    constructor(levelProps) {
        const { name, tileGrid, eventGrid, vp, tileSet } = levelProps;
        this.name = name;
        this.tileGrid = tileGrid;
        this.eventGrid = eventGrid;
        this.vp = vp;
        this.tileSet = tileSet;
    }
    draw(context) {
        const { charRow, charCol } = this.getCurrentPosition('@');
        const rowRange = [
            charRow - this.vp.rowPad,
            charRow + this.vp.rowPad
        ];
        const colRange = [
            charCol - this.vp.colPad,
            charCol + this.vp.colPad
        ];
        this.tileGrid
            .forEach((row, rowIndex) => {
            const y = (rowIndex - rowRange[0]) * this.vp.blockSize;
            row.forEach((character, colIndex) => {
                const x = (colIndex - colRange[0]) * this.vp.blockSize;
                const newCell = new Cell({
                    position: [x, y],
                    tileCharacter: character,
                    eventCharacter: this.eventGrid[rowIndex][colIndex],
                    vp: this.vp,
                    tileSet: this.tileSet
                });
                newCell.draw(context);
            });
        });
    }
    getCurrentPosition(character) {
        const charRow = this.eventGrid.findIndex((row) => row.includes(character));
        const charCol = this.eventGrid[charRow].findIndex((c) => c === character);
        return { charRow, charCol };
    }
    getTargetPosition(direction, characterPosition) {
        const [moveX, moveY] = direction;
        const [charCol, charRow] = characterPosition;
        let targetRow = moveY !== 0 ? charRow + moveY : charRow;
        let targetCol = moveX !== 0 ? charCol + moveX : charCol;
        return { targetRow, targetCol };
    }
    moveCharacter(character, direction) {
        const { charRow, charCol } = this.getCurrentPosition(character);
        const { targetRow, targetCol } = this.getTargetPosition(direction, [charCol, charRow]);
        // TODO change direction player is facing, even if it's just a variable
        // ...
        // Stay within bounds
        if (targetCol < 0 || targetCol > this.eventGrid[0].length - 1 || targetRow < 0 || targetRow > this.eventGrid.length - 1) {
            return;
        }
        const whatsThere = this.eventGrid[targetRow][targetCol];
        // Move to target position
        if (whatsThere === ' ') {
            this.eventGrid[charRow][charCol] = ' ';
            this.eventGrid[targetRow][targetCol] = '@';
            return;
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
export default Level;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV2ZWwuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsiQXBwL0xldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFDcEMsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFBO0FBVXpCLE1BQU0sS0FBSztJQU9QLFlBQVksVUFBMEI7UUFDbEMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxVQUFVLENBQUE7UUFDN0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7UUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUMxQixDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQWlDO1FBQ2xDLE1BQU0sRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRXZELE1BQU0sUUFBUSxHQUFHO1lBQ2IsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUN4QixPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1NBQzNCLENBQUE7UUFFRCxNQUFNLFFBQVEsR0FBRztZQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFDeEIsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtTQUMzQixDQUFBO1FBRUQsSUFBSSxDQUFDLFFBQVE7YUFDUixPQUFPLENBQUMsQ0FBQyxHQUFZLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO1lBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxH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