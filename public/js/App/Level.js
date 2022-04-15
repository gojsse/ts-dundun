import { TileMap } from '../TileMap';
import Cell from './Cell';
class Level {
    constructor(levelProps) {
        const { name, tileGrid, eventGrid, vp, tileSet, playerDirection } = levelProps;
        this.name = name;
        this.tileGrid = tileGrid;
        this.eventGrid = eventGrid;
        this.vp = vp;
        this.tileSet = tileSet;
        this.playerDirection = playerDirection;
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
                    tileSet: this.tileSet,
                    playerDirection: this.playerDirection
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
        if (direction[0] === -1) {
            this.playerDirection = 'w';
        }
        else if (direction[0] === 1) {
            this.playerDirection = 'e';
        }
        else if (direction[1] === -1) {
            this.playerDirection = 'n';
        }
        else if (direction[1] === 1) {
            this.playerDirection = 's';
        }
        // Stay within bounds
        if (targetCol < 0 || targetCol > this.eventGrid[0].length - 1 || targetRow < 0 || targetRow > this.eventGrid.length - 1) {
            return;
        }
        const whatsThere = this.eventGrid[targetRow][targetCol];
        // Move to target position
        if (whatsThere !== 'X') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV2ZWwuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsiQXBwL0xldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFDcEMsT0FBTyxJQUFJLE1BQU0sUUFBUSxDQUFBO0FBV3pCLE1BQU0sS0FBSztJQVFQLFlBQVksVUFBMEI7UUFDbEMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLEdBQUcsVUFBVSxDQUFBO1FBQzlFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO1FBQzFCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUE7SUFDMUMsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFpQztRQUNsQyxNQUFNLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUV2RCxNQUFNLFFBQVEsR0FBRztZQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFDeEIsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtTQUMzQixDQUFBO1FBRUQsTUFBTSxRQUFRLEdBQUc7WUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07U0FDM0IsQ0FBQTtRQUVELElBQUksQ0FBQyxRQUFRO2FBQ1IsT0FBTyxDQUFDLENBQUMsR0FBWSxFQUFFLFFB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