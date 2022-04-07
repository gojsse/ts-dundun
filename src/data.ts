import { TileGrid, EventGrid } from './types'

// Static background stuff
export const level1TileGrid: TileGrid = [
    ['0', '_', '0', '0', '0', '0', '_', '_', '_', '_', '_', '_', '_'],
    ['0', '_', '_', '0', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['0', '_', '_', '_', '_', 'u', '_', '~', '~', '~', '~', '~', '~'],
    ['0', '_', '0', '_', '_', '_', '_', '~', '~', '~', '~', '~', '~'],
    ['0', '_', '0', '0', '0', '_', '~', '~', '~', '~', '~', '~', '~'],
    ['0', '_', '0', '0', '0', '_', '~', '~', '~', '~', '~', '~', '~'],
    ['0', '_', '0', '0', '0', '_', '_', '~', '~', '~', '~', '~', '~'],
    ['0', '_', '0', '0', '0', '0', '_', '_', '_', '_', '_', '_', '_'],
    ['0', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['~', '~', '~', '~', '~', '~', '~', '_', '_', '_', '_', '_', '_'],
    ['0', 'd', '_', '~', '~', '~', '~', '_', '_', '_', '_', '_', '_'],
    ['0', '_', '_', '~', '~', '~', '~', '_', '_', '_', '_', '_', '_'],
    ['0', '_', '_', '~', '~', '~', '~', '_', '_', '_', '_', '_', '_'],
    ['0', '0', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
]

// Dynamic stuff overlayed on background or events
export const level1EventGrid: EventGrid = [
    ['X', ' ', 'X', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['X', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['X', ' ', ' ', ' ', ' ', 'U', ' ', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', ' ', 'X', ' ', ' ', ' ', ' ', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', ' ', 'X', 'X', 'X', ' ', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', ' ', 'X', 'X', 'X', ' ', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', ' ', 'X', 'X', 'X', ' ', ' ', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', ' ', 'X', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' '],
    ['X', ' ', ' ', 'X', 'X', 'X', 'X', ' ', ' ', 'K', ' ', ' ', ' '],
    ['X', ' ', ' ', 'X', 'X', 'X', 'X', ' ', 'K', 'K', ' ', ' ', ' '],
    ['X', '@', ' ', 'X', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' '],
    ['X', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
]