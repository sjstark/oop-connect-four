import {Game} from './game.js'

export default class GameJsonDeserializer {
  constructor(string) {
    this.gameString = string;
    this.game = new Game ();
  }



  deserialize() {
    let serializedGame = JSON.parse(this.gameString);

    let { player1,
      player2,
      currentPlayer,
      winnerNumber,
      boardArray
    } = serializedGame;

    console.log(this.game);

    this.game.arrayToBoard(boardArray);
    this.player1 = player1;
    this.player2 = player2;
    this.winnerNumber = winnerNumber;

    return this.game;

  }
}
