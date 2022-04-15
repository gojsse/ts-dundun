export type TileCharacters = ' ' | '_' | '~' | '*' | 'u' | 'd' | 'l' | 'B' | 'Q' | '0' | '1' | '2' | '3' | '4' | '5' | '6'
export type TileRow = TileCharacters[]
export type TileGrid = TileRow[]

export type EventCharacters = ' ' | 'X' | 'H' | 'K' | 'D' | 'U' | '1' | '2' | '@' 
export type EventRow = EventCharacters[]
export type EventGrid = EventRow[]

export type Inventory = {}
export type Direction = 'n' | 'e' | 's' | 'w'

export type XY = [number, number]

export type VP = {
    rows: number,
    cols: number,
    rowPad: number,
    colPad: number,
    blockSize: number
}
