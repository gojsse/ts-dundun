import { ActionKeys } from '../types'

type ActionTypes = ' ' | 'trigger' | 'stairs'

interface ActionInterface {
    name: string
    type: ActionTypes
    dialog: string[]
    sfx?: string
    xy: [number, number]
}

export const ActionList: Record<ActionKeys, ActionInterface> = {
    ' ': {
        name: ' ',
        type: ' ',
        dialog: ['an action'],
        xy: [-1, -1]
    },
    'b': {
        name: 'Bed',
        type: ' ',
        dialog: ['Go to SLEEP'],
        xy: [-1, -1]
    },
    'd': {
        name: 'Stairs Down',
        type: 'stairs',
        dialog: ['Go Down'],
        xy: [0, 5]
    },
    't': {
        name: 'Floor Switch',
        type: 'trigger',
        dialog: ['You stepped on a trigger'],
        sfx: 'sfx_item_drop.wav',
        xy: [2, 5]
    },
    'u': {
        name: 'Stairs Up',
        type: 'stairs',
        dialog: ['Go Up'],
        xy: [4, 3]
    },
    'X': {
        name: 'Collision',
        type: ' ',
        dialog: ['Something blocks your way'],
        xy: [-1, -1]
    },
}
