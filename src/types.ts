export type VP = {
    rows: number,
    cols: number,
    rowPad: number,
    colPad: number,
    blockSize: number
}

export type Inventory = {}
export type Direction = 'n' | 'e' | 's' | 'w'
export type XY = [number, number]
export type XYD = [number, number, Direction]

export type TileKeys = ' ' | '_' | '~' | '*' | 'k' | 'q' | 'v' | 'w' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type TileRow = TileKeys[]
export type TileGrid = TileRow[]

export type EventKeys = ' ' | 'b' | 'd' | 't' | 'u' | 'X'
export type EventRow = EventKeys[]
export type EventGrid = EventRow[]

export type ItemKeys = ' ' | 'b' | 'H'
export type ItemRow = ItemKeys[]
export type ItemGrid = ItemRow[]

export type CharKeys = ' ' | '@' | 'S'
export type CharCell = [CharKeys, Direction]
export type CharRow = CharCell[]
export type CharGrid = CharRow[]

export type GridLayers = {
    tiles: TileGrid
    items: ItemGrid
    chars: CharGrid
    events: EventGrid
}
