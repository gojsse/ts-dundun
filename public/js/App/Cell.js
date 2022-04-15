class Cell {
    constructor({ position, tileCharacter, eventCharacter, vp, tileSet, playerDirection }) {
        this.tileSourceCoords = [-1, -1];
        this.charSourceCoords = [-1, -1];
        // color: string = 'gray'
        this.shape = 'rect';
        const [x, y] = position;
        this.x = x;
        this.y = y;
        this.vp = vp;
        this.tileSet = tileSet;
        switch (tileCharacter) {
            case '~':
                this.tileSourceCoords = [0, 14];
                break;
            case '*':
                this.tileSourceCoords = [1, 14];
                break;
            case 'B':
                this.tileSourceCoords = [1, 5];
                break;
            case 'Q':
                this.tileSourceCoords = [0, 13];
                break;
            case 'd':
                this.tileSourceCoords = [0, 6];
                break;
            case 'u':
                this.tileSourceCoords = [99, 99];
                break;
            case '0':
                this.tileSourceCoords = [0, 8];
                break;
            case '1':
                this.tileSourceCoords = [1, 11];
                break;
            case '_':
                this.tileSourceCoords = [0, 11];
                break;
        }
        // 
        switch (eventCharacter) {
            case '@':
                console.log('playerDirection', playerDirection);
                const cells = {
                    'n': [2, 0],
                    'e': [1, 0],
                    's': [0, 0],
                    'w': [3, 0]
                };
                this.charSourceCoords = cells[playerDirection];
                break;
            case 'K':
                this.charSourceCoords = [5, 2];
                break;
            case 'H':
                this.charSourceCoords = [0, 3];
                break;
        }
    }
    draw(context) {
        const { blockSize } = this.vp;
        const [sourceX, sourceY] = this.tileSourceCoords;
        const [charSourceX, charSourceY] = this.charSourceCoords;
        context.beginPath();
        // Fill background
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, blockSize, blockSize);
        // Draw tile background
        if (sourceX > -1 && sourceY > -1) {
            context.imageSmoothingEnabled = false;
            context.drawImage(this.tileSet, sourceX * 32, sourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize);
        }
        // Draw char on next layer
        if (charSourceX > -1 && charSourceY > -1) {
            context.imageSmoothingEnabled = false;
            context.drawImage(this.tileSet, charSourceX * 32, charSourceY * 32, 32, 32, this.x, this.y, blockSize, blockSize);
        }
        context.fill();
        context.closePath();
    }
}
export default Cell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIiwic291cmNlcyI6WyJBcHAvQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxNQUFNLElBQUk7SUFVTixZQUFZLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQWlCO1FBTHBHLHFCQUFnQixHQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMvQixxQkFBZ0IsR0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDL0IseUJBQXlCO1FBQ3pCLFVBQUssR0FBbUIsTUFBTSxDQUFBO1FBRzFCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQTtRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBRXRCLFFBQVEsYUFBYSxFQUFFO1lBQ25CLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBQy9CLE1BQUs7WUFDVCxLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO2dCQUMvQixNQUFLO1lBQ1QsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDOUIsTUFBSztZQUNULEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBQy9CLE1B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