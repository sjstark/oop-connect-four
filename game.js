import Column from './column.js';
import ColumnWinInspector from './column-win-inspector.js';
import RowWinInspector from './row-win-inspector.js';


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
        } else if (this.winnerNumber === 1) {
          return `${this.player1} wins!`
        } else if (this.winnerNumber === 2) {
          return `${this.player2} wins!`
        } else {
        return `${this.player1} vs. ${this.player2}`;
        }
    }

    playInColumn(columnIndex){
        let column = this.columns[columnIndex]
        if (!this.isColumnFull(columnIndex)) {
          column.add(this.currentPlayer);

          this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        }

        this.checkForTie();
        this.checkForColumnWin();
    }

    checkForColumnWin(){
        if (this.winnerNumber){
            return;
        }
        for (let i = 0; i < this.columns.length; i++){
            let column = this.columns[i];
            let inspector = new ColumnWinInspector(column);
            let result = inspector.inspect();
            if (result){
                this.winnerNumber = result;
            }
        }
    }

    checkForRowWin() {
      if (this.winnerNumber){
        return;
    }
    for (let columnIndex = 0; columnIndex < this.columns.length; columnIndex++){


        let column = this.columns[columnIndex];
        let inspector = new ColumnWinInspector(column);
        let result = inspector.inspect();
        if (result){
            this.winnerNumber = result;
        }
    }
    }

    getTokenAt(rowIndex, columnIndex) {
      let column = this.columns[columnIndex]
      return column.getTokenAt(rowIndex);
    }

    isColumnFull(columnIndex) {
      if (this.winnerNumber === 1 || this.winnerNumber === 2) {
        return true;
      }

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
