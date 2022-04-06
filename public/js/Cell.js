import { TileMap } from './TileMap';
class Cell {
    constructor(position, character, vp) {
        this.shape = 'rect';
        const [x, y] = position;
        this.x = x;
        this.y = y;
        this.vp = vp;
        let color = 'gray';
        switch (character) {
            case 'P':
                color = TileMap[character].color;
                this.shape = 'circle';
                break;
            case 'X':
            case 'K':
            case 'D':
            case ' ':
                color = TileMap[character].color;
                break;
        }
        this.color = color;
    }
    draw(context) {
        const { blockSize } = this.vp;
        context.beginPath();
        // Tile background
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, blockSize, blockSize);
        // Tile foreground
        context.fillStyle = this.color;
        if (this.shape === 'circle') {
            context.ellipse(this.x + blockSize / 2, this.y + blockSize / 2, blockSize / 2, blockSize / 2, Math.PI * 2, 0, 2 * Math.PI * 2);
        }
        else {
            context.fillRect(this.x, this.y, blockSize, blockSize);
        }
        context.fill();
        context.closePath();
    }
}
export default Cell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJDZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUE7QUFFbkMsTUFBTSxJQUFJO0lBUU4sWUFBWSxRQUFZLEVBQUUsU0FBcUIsRUFBRSxFQUFNO1FBRnZELFVBQUssR0FBc0IsTUFBTSxDQUFBO1FBRzdCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQTtRQUVaLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQTtRQUNsQixRQUFRLFNBQVMsRUFBRTtZQUNmLEtBQUssR0FBRztnQkFDSixLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtnQkFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7Z0JBQ3JCLE1BQUs7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBQ0osS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUE7Z0JBQ2hDLE1BQUs7U0FDWjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBaUM7UUFDbEMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFJLElBQUksQ0FBQyxFQUFFLENBQUE7UUFDOUIsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRW5CLGtCQUFrQjtRQUNsQixPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQTtRQUMzQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFFdEQsa0JBQWtCO1FBQ2xCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2xJO2FBQU07WUFDSCxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUE7U0FDekQ7UUFFRCxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDZCxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDdkIsQ0FBQztDQUNKO0FBRUQsZUFBZSxJQUFJLENBQUEifQ==