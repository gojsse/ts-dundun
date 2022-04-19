import { TileKeys } from '../types'

type TileTypes = 'floor' | 'water' | 'block' | 'trigger' | 'item'

interface TileInterface {
    name: string
    color: string
    type: TileTypes
    xy: [number, number]
}

export const TileList: Record<TileKeys, TileInterface> = {
    ' ': {
        name: '',
        color: 'black',
        type: 'floor',
        xy: [0, 0],
    },
    '_': {
        name: '',
        color: 'black',
        type: 'floor',
        xy: [4, 8],
    },
    '~': {
        name: 'Water',
        color: 'blue',
        type: 'water',
        xy: [5, 8],
    },
    '*': {
        name: '',
        color: '',
        type: 'block',
        xy: [0, 0],
    },
    '0': {
        name: '',
        color: 'green',
        type: 'block',
        xy: [1, 7],
    },
    '1': {
        name: '',
        color: 'blue',
        type: 'block',
        xy: [1, 2],
    },
    '2': {
        name: '',
        color: '',
        type: 'block',
        xy: [0, 0],
    },
    '3': {
        name: '',
        color: '',
        type: 'block',
        xy: [0, 0],
    },
    '4': {
        name: '',
        color: '',
        type: 'block',
        xy: [0, 0],
    },
    '5': {
        name: '',
        color: '',
        type: 'block',
        xy: [0, 0],
    },
    '6': {
        name: '',
        color: '',
        type: 'block',
        xy: [0, 0],
    },
    '7': {
        name: '',
        color: '',
        type: 'block',
        xy: [0, 0],
    },
    '8': {
        name: '',
        color: '',
        type: 'block',
        xy: [0, 0],
    },
    '9': {
        name: '',
        color: '',
        type: 'block',
        xy: [0, 0],
    },
    'k': {
        name: 'Key',
        color: 'gold',
        type: 'item',
        xy: [1, 2],
    },
    'q': {
        name: '',
        color: '',
        type: 'block',
        xy: [10, 6],
    },
    'v': {
        name: 'Water01',
        color: 'blue',
        type: 'water',
        xy: [1, 11],
    },
    'w': {
        name: 'Water00',
        color: 'blue',
        type: 'water',
        xy: [0, 11],
    },
}
