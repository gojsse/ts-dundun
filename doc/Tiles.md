# Tiles

Tiles from an html img can provide a sprite sheet to the canvas element.

```
<canvas id="canvas" tabindex="1"></canvas>
<div style="display: none;">
    <img id="source" src="image/tiles_world.png" width="320" height="240">
</div>
```

In this scenario, the png should be some sort of sprite/tile sheet in a grid of easily calculable sections. To get a 16x16 section from the png image and place into the canvas as a 32x32 image:

```
const tiles = document.getElementById('source')
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
context.imageSmoothingEnabled = false;
context.drawImage(tiles, 0, 0, 16, 16, 96, 128, 32, 32);
```

Test
- PNG with transparency
- PNG with alpha
- SVG with transparency
- SVG with alpha