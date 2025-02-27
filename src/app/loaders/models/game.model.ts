import { PieceColor } from "./piece.model";

export interface GameDefinitionSpec {
    state: GameStateSpec;
}

interface GameStateSpec {
    board: string;
    turn: PieceColor; //TODO: maybe replace with type PieceColor
    isGameOver?: boolean;
    isCheckMate?: boolean;
    isDraw?: boolean;
    moveHistory?: []; 
}