import Column from './column.js';

class Game {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.columns = [];
        for (let i = 0; i < 7; i++){
            this.columns.push(new Column)
        }
        this.winnerNumber = 0;
    }

    getName(){
        if (this.winnerNumber === 3) {
          return 'Game is a tie!'
        } else {
        return `${this.player1} vs. ${this.player2}`;
        }
    }

    playInColumn(columnIndex){
        this.columns[columnIndex].add(this.currentPlayer);
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;

        this.checkForTie();
    }

    getTokenAt(rowIndex, columnIndex) {
      let column = this.columns[columnIndex]
      return column.getTokenAt(rowIndex);
    }

    isColumnFull(columnIndex) {
      let col = this.columns[columnIndex]
      return col.isFull;
    }

    checkForTie() {

      let columnsCheck = this.columns.every(function(column) {
        if (column.isFull) {
          return true;
        } else {
          return false;
        }
      })

      if (columnsCheck) {
        this.winnerNumber = 3
      }

    }
}

export {
    Game
}
