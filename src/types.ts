export type Characters = ' ' | 'P' | 'X' | 'K' | 'D' | 'U' | '1' | '2'
export type GridRow = Characters[]
export type Grid = GridRow[]
export type XY = [number, number]
export type VP = {
    h: number,
    w: number,
    hPad: number,
    vPad: number,
    blockSize: number
}

export type Inventory = {}
