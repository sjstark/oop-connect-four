export default class GameJsonSerializer {
  constructor(game) {
    this.game = game
  }



  serialize() {
    let serializedGame = {
      player1: this.game.player1,
      player2: this.game.player2,
      currentPlayer: this.game.currentPlayer,
      winnerNumber: this.game.winnerNumber,
      boardArray: this.game.boardToArray()
    }

    return JSON.stringify(serializedGame);

  }
}
