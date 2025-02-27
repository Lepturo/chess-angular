// TODO: write script that initializes json with cells and pieces
// defines the board with position of the wanted pieces

import { PieceColor, PieceDefinition } from "./piece.model";

export interface BaordDefinition {
    cells: [CellDefinition];
    orientation?: PieceColor; // TODO: maybe replace with types PieceColor 
}

export interface CellDefinition {
    name: string; // like a1-a8-h1-h8
    piece: PieceDefinition | null;
    x?: number;
    y?: number;
    isOccupied?: boolean;
    isHighlighted?: boolean;
}

