// import { ActionList } from "./data/ActionList"
// import { ItemList } from "./data/ItemList"

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



// GRID
export type BgKeys = ' ' | '_' | '~' | '*' | 'k' | 'q' | 'v' | 'w' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type BgCell = BgKeys
export type BgRow = BgCell[]
export type BgGrid = BgRow[]

export type ActionObject = {
    key: ActionCell,
    type: string,
    destination: string[]
}
export type ActionKeys = ' ' | 'b' | 'd' | 't' | 'u' | 'X'
export type ActionCell = ActionKeys
// | ActionObject
export type ActionRow = ActionCell[]
export type ActionGrid = ActionRow[]

export type ItemKeys = ' ' | 'b' | 'H'
export type ItemCell = ItemKeys
export type ItemRow = ItemCell[]
export type ItemGrid = ItemRow[]

export type CharKeys = ' ' | '@' | 'S'
export type CharCell = [CharKeys, Direction]
export type CharRow = CharCell[]
export type CharGrid = CharRow[]

export type GridCell = {
    bg: BgCell,
    action: ActionCell,
    item: ItemCell,
    char: CharCell,
}
export type GridRow = GridCell[]
export type Grid = GridRow[]
