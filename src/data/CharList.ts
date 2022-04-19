import { CharKeys } from '../types'

type CharTypes = ' ' | 'trigger' | 'stairs'

interface CharInterface {
    name: string
    type: CharTypes
    dialog: string[]
    xy: [number, number]
}

export const CharList: Record<CharKeys, CharInterface> = {
    ' ': {
        name: ' ',
        type: ' ',
        dialog: ['???'],
        xy: [-1, -1]
    },
    '@': {
        name: 'Player',
        type: ' ',
        dialog: ['Me'],
        xy: [-1, -1]
    },
    'S': {
        name: 'Skeleton',
        type: ' ',
        dialog: [
            'CLiCk-ClAcK! The sound of bones.'
        ],
        xy: [5, 2]
    },
}
