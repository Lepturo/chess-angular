export interface PieceDefinition {
    color: string,
    type: PieceKind
    isMoving?: boolean;
    isCaptured?: boolean; // NOTE: maybe for future use (for captured pieces on side)
}

export enum PieceKind {
    Pawn = "pawn",
    Bishop = "bishop",
    Knight = "knight",
    Rook = "rook",
    King = "king",
    Queen = "queen"
}

export enum PieceColor {
    WHITE = "white",
    BLACK = "black"
}