// TODO: write script that initializes json with cells and pieces
// defines the board with position of the wanted pieces

export interface BaordDefinition {
    cells: [CellDefinition]
}

interface CellDefinition {
    x: number,
    y: number,
    piece: PieceDefinition
}

interface PieceDefinition {
    color: string,
    type: PieceKind
}

enum PieceKind {
    Pawn = "pawn",
    Bishop = "bishop",
    Knight = "knight",
    Rook = "rook",
    King = "king",
    Queen = "queen"
}