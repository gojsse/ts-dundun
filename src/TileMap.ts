export const TileMap = {
    X: {
        name: 'wall',
        color: 'black',
        type: 'structure'
    },
    P: {
        name: 'player',
        color: 'lime',
        type: 'character'
    },
    K: {
        name: 'key',
        color: 'gold',
        type: 'item'
    },
    D: {
        name: 'door',
        color: 'brown',
        type: 'door',
        key: 'K'
    },
    [' ']: {
        name: 'space',
        color: 'white',
        type: 'space' 
    }
}
