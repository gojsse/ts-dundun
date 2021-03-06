class SFX {
    constructor({ src }) {
        this.rootUrl = 'http://localhost:8000/audio';
        this.sound = document.createElement('audio');
        this.sound.src = `${this.rootUrl}/${src}`;
        this.sound.setAttribute('preload', 'auto');
        this.sound.setAttribute('controls', 'none');
        this.sound.style.display = 'none';
        document.body.appendChild(this.sound);
    }
    play() {
        this.sound.play();
    }
    stop() {
        this.sound.pause();
    }
}
export default SFX;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0ZYLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8iLCJzb3VyY2VzIjpbIkFwcC9TRlgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxHQUFHO0lBSUwsWUFBWSxFQUFFLEdBQUcsRUFBZ0I7UUFIakMsWUFBTyxHQUFHLDZCQUE2QixDQUFBO1FBSW5DLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxFQUFFLENBQUE7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3RCLENBQUM7Q0FDSjtBQUVELGVBQWUsR0FBRyxDQUFBIn0=