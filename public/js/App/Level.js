import { ItemList } from '../data/ItemList';
import { CharList } from '../data/CharList';
import { ActionList } from '../data/ActionList';
import Cell from './Cell';
import SFX from './SFX';
class Level {
    constructor(levelProps) {
        const { name, vp, spriteSheet, grid } = levelProps;
        this.name = name;
        this.vp = vp;
        this.spriteSheet = spriteSheet;
        this.grid = grid;
    }
    draw(context) {
        const [charCol, charRow] = this.getCurrentPosition('@');
        const rowRange = [
            charRow - this.vp.rowPad,
            charRow + this.vp.rowPad
        ];
        const colRange = [
            charCol - this.vp.colPad,
            charCol + this.vp.colPad
        ];
        this.grid
            .forEach((row, rowIndex) => {
            const y = (rowIndex - rowRange[0]) * this.vp.blockSize;
            row.forEach((cell, colIndex) => {
                const x = (colIndex - colRange[0]) * this.vp.blockSize;
                const newCell = new Cell({
                    vp: this.vp,
                    spriteSheet: this.spriteSheet,
                    position: [x, y],
                    tileStack: cell
                });
                newCell.draw(context);
            });
        });
    }
    getCurrentPosition(character) {
        let charCol = -1;
        let charDirection = 's';
        const charRow = this.grid.findIndex((row, rowIndex) => {
            const colIndex = row.findIndex((c) => {
                return c.char[0] === character;
            });
            if (colIndex !== -1) {
                charCol = colIndex;
                charDirection = this.grid[rowIndex][colIndex].char[1];
                return true;
            }
        });
        return [charCol, charRow, charDirection];
    }
    getTargetPosition(direction, characterPosition) {
        const [moveX, moveY] = direction;
        const [charCol, charRow] = characterPosition;
        let targetRow = moveY !== 0 ? charRow + moveY : charRow;
        let targetCol = moveX !== 0 ? charCol + moveX : charCol;
        return [targetCol, targetRow];
    }
    moveCharacter(direction) {
        const [charCol, charRow, charDirection] = this.getCurrentPosition('@');
        const [targetCol, targetRow] = this.getTargetPosition(direction, [charCol, charRow]);
        let newDirection = charDirection;
        if (direction[0] === -1) {
            newDirection = 'w';
        }
        else if (direction[0] === 1) {
            newDirection = 'e';
        }
        else if (direction[1] === -1) {
            newDirection = 'n';
        }
        else if (direction[1] === 1) {
            newDirection = 's';
        }
        // Change direction player faces
        if (charDirection !== newDirection) {
            this.grid[charRow][charCol].char = ['@', newDirection];
            return;
        }
        // Stay within bounds
        if (targetCol < 0 || targetCol > this.grid[0].length - 1 || targetRow < 0 || targetRow > this.grid.length - 1) {
            return;
        }
        // Deterine what's at the target space character wants to move
        const targetRowCol = this.grid[targetRow][targetCol];
        if (targetRowCol.bg !== ' ') {
            const { sfx } = ActionList[targetRowCol.action];
            if (sfx) {
                const sound = new SFX({ src: sfx });
                sound.play();
            }
        }
        if (targetRowCol.item !== ' ') {
            console.log(ItemList[targetRowCol.item].info);
        }
        if (targetRowCol.char[0] !== ' ') {
            console.log(CharList[targetRowCol.char[0]].dialog[0]);
        }
        // Move to target position if possible
        if (targetRowCol.action !== 'X' && targetRowCol.char[0] === ' ') {
            this.grid[charRow][charCol].char = [' ', 's'];
            this.grid[targetRow][targetCol].char = ['@', newDirection];
            return;
        }
    }
}
export default Level;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV2ZWwuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyIsInNvdXJjZXMiOlsiQXBwL0xldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQy9DLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQTtBQUN6QixPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUE7QUFTdkIsTUFBTSxLQUFLO0lBTVAsWUFBWSxVQUEwQjtRQUNsQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFBO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFpQztRQUNsQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUV2RCxNQUFNLFFBQVEsR0FBRztZQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFDeEIsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtTQUMzQixDQUFBO1FBRUQsTUFBTSxRQUFRLEdBQUc7WUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07U0FDM0IsQ0FBQTtRQUVELElBQUksQ0FBQyxJQUFJO2FBQ0os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