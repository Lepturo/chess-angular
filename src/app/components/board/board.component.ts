import { Component } from '@angular/core';
import { CommonModule } from "@angular/common"

interface Cell {
  x: number,
  y: number,
  color: string
}


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  BOARD_CELL_COUNT: number = 8;
  BOARD_TEST: Cell[] = [];
  board = null; //TODO: define type

  ngOnInit() {
    this.initTestBoard();

    this.initBoard();
  }

  private initTestBoard() {
    for(let x = 0; x < this.BOARD_CELL_COUNT; x++) {
      for(let y = 0; y < this.BOARD_CELL_COUNT; y++) {
        const cell: Cell = {
          x: x,
          y: y,
          color: (x+y) % 2 === 0 ? "bg_1" : "bg_2"
        }
        
        this.BOARD_TEST.push(cell);
      }
    }
  }


  private initBoard() {

  }

  private initPieces() {

  }

  getCellColor(cell: Cell) {
    return "";
  }
}
