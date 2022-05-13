import { GridCell, BgGrid, ActionGrid, ItemGrid, CharGrid, CharCell } from '../../types'

// TODO make LevelMap a class and not just an object

// Static background tiles
const bgGrid: BgGrid = [
    ['q', 'q', '_', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'],
    ['q', '0', '_', '0', '0', '0', '0', '_', '_', '_', '_', '_', '_', '_', 'w', 'q'],
    ['q', '0', '_', '~', '0', '~', '~', '_', '_', '_', '_', '_', '_', '_', 'w', 'q'],
    ['q', '0', '_', '_', '~', '_', '_', '_', 'v', 'v', 'v', 'v', 'v', 'v', 'w', 'q'],
    ['q', '0', '_', '0', '_', '_', '_', '_', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'q'],
    ['q', '0', '_', '0', '0', '0', '_', 'v', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'q'],
    ['q', '0', '_', '0', '0', '0', '_', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'q'],
    ['q', '0', '_', '0', '0', '0', '_', '_', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'q'],
    ['q', '0', '_', '0', '0', '0', '0', '_', '_', '_', '_', '0', '0', '0', 'w', 'q'],
    ['q', '0', '_', '~', '~', '~', '~', '_', '_', '_', '_', '0', '~', '0', 'w', 'q'],
    ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', '_', '_', '_', '~', '_', '0', 'w', 'q'],
    ['0', '0', '_', '_', 'w', 'w', 'w', 'w', '_', '_', '_', '0', '_', '0', 'w', 'q'],
    ['0', '0', '_', '_', 'w', 'w', 'w', 'w', '_', '_', '_', '0', '_', '0', 'w', 'q'],
    ['0', '~', '_', '_', 'w', 'w', 'w', 'w', '_', '_', '_', '0', '_', '0', 'w', 'q'],
    ['0', '0', '_', '_', '_', '_', '_', '_', '_', '_', '_', '0', '_', '0', 'w', 'q'],
    ['v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'v', 'w', 'q'],
]

// Things you can pick up, see or event triggers that need to be symbolized. Ex: a bed.
const itemGrid: ItemGrid = bgGrid
    .map(row => row.map(() => ' '))
itemGrid[9][12] = 'b'
itemGrid[13][1] = 'H'

// Trigger events, collision, things you cannot see but can perform an action when on/near
const actionGrid: ActionGrid = [
    //0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15
    ['X', 'X', ' ', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'], // 0
    ['X', 'X', ' ', 'X', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', 'X'], // 1
    ['X', 'X', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', 'X'], // 2
    ['X', 'X', ' ', ' ', ' ', ' ', 't', ' ', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'], // 3
    ['X', 'X', ' ', 'X', ' ', ' ', ' ', ' ', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'], // 4
    ['X', 'X', ' ', 'X', 'X', 'X', ' ', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'], // 5
    ['X', 'X', ' ', 'X', 'X', 'X', ' ', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'], // 6
    ['X', 'X', ' ', 'X', 'X', 'X', ' ', ' ', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'], // 7
    ['X', 'X', ' ', 'X', 'X', 'X', 'X', ' ', ' ', ' ', ' ', 'X', 'X', 'X', 'X', 'X'], // 8
    ['X', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X', 'X', 'X'], // 9
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', 'X', 'X', 'X'], // 10
    ['X', 'X', 'd', ' ', 'X', 'X', 'X', 'X', ' ', ' ', ' ', 'X', ' ', 'X', 'X', 'X'], // 11
    ['X', 'X', ' ', ' ', 'X', 'X', 'X', 'X', ' ', ' ', ' ', 'X', ' ', 'X', 'X', 'X'], // 12
    ['X', ' ', ' ', ' ', 'X', 'X', 'X', 'X', ' ', ' ', ' ', 'X', ' ', 'X', 'X', 'X'], // 13
    ['X', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', 'X', 'X', 'X'], // 14
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'], // 15
]
// ActionGrid[11][2] = {
//     key: 'd',
//     type: 'stairs',
//     destination: ['001.b', 'x', 'y']
// }

// Characters
const charGrid: CharGrid = bgGrid.map(row => {
    return row.map(() => <CharCell>[' ', 's'])
})
charGrid[14][12] = ['@', 's']
charGrid[8][10] = ['S', 's']

// Map with all layers in one
const Map001 = bgGrid.map((row, rowIndex) => {
    return row.map((cell, colIndex): GridCell => {
        return {
            bg: cell,
            item: itemGrid[rowIndex][colIndex],
            action: actionGrid[rowIndex][colIndex],
            char: charGrid[rowIndex][colIndex],
        }
    })
})

export default Map001
