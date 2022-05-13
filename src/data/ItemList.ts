import { ItemKeys } from '../types'

type ItemTypes = 'key' | 'bed' | 'heart'

interface ItemInterface {
    name: string
    type: ItemTypes
    info: string
    xy: [number, number]
}

export const ItemList: Record<ItemKeys, ItemInterface> = {
    ' ': {
        name: 'TODO',
        type: 'key',
        info: '???',
        xy: [-1, -1],
    },
    'b': {
        name: 'Bed',
        type: 'bed',
        info: 'Zzzzz',
        xy: [1, 4],
    },
    'H': {
        name: 'Heart',
        type: 'heart',
        info: 'You are stronger',
        xy: [0, 3],
    },
}
