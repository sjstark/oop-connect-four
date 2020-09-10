class Game {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
    }
    getName(){
        return `${this.player1} vs. ${this.player2}`;
    }

    playInColumn(){
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;

    }
}

export {
    Game
}
