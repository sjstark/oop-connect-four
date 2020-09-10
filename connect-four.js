let game;

window.addEventListener('DOMContentLoaded', event => {


  let player1El = document.getElementById('player-1-name');
  let player2El = document.getElementById('player-2-name');
  let newGameBtn = document.getElementById('new-game');

  function checkPlayerNames() {
    let player1Name = player1El.value;
    let player2Name = player2El.value;
    if (player1Name && player2Name) {
      newGameBtn.disable = false;
    } else {
      newGameBtn.disable = true;
    }
  }

  player1El.addEventListener('keyup', ev => {
    checkPlayerNames();
  })

  player2El.addEventListener('keyup', event => {
    checkPlayerNames();
  })



})

class Game {

}
