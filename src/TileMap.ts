export const TileMap = {
    '_': {
        name: '',
        color: 'black',
        type: 'floor'
    },
    '0': {
        name: '',
        color: 'green',
        type: 'structure'
    },
    '1': {
        name: '',
        color: 'blue',
        type: 'structure'
    },
    'd': {
        name: 'Stairs Down',
        color: 'red',
        type: 'trigger',
        // position: [16, 16]
    },
    'u': {
        name: 'Stairs Up',
        color: 'orange',
        type: 'trigger',
        // position: [16, 16]
    },
    'k': {
        name: 'Key',
        color: 'gold',
        type: 'item'
    },
    'l': {
        name: 'Lock',
        color: 'lime',
        type: 'trigger'
    },
    '~': {
        name: 'Water',
        color: 'blue',
        type: 'water',
        position: [16, 16]
    },
}
