import { EventKeys } from '../types'

type EventTypes = ' ' | 'trigger' | 'stairs'

interface EventInterface {
    name: string
    type: EventTypes
    dialog: string[]
    xy: [number, number]
}

export const EventList: Record<EventKeys, EventInterface> = {
    ' ': {
        name: ' ',
        type: ' ',
        dialog: ['an event'],
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
