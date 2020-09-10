import { Game } from './game.js';
let game;

function updateUI() {
  if (game === undefined) {
    document.getElementById('board-holder')
      .classList.add('is-invisible')
  } else {
    document.getElementById('board-holder')
      .classList.remove('is-invisible')
    document.getElementById('game-name').innerHTML = game.getName()

    const currentPlayer = game.currentPlayer;
    const clickTargets = document.getElementById('click-targets');
    if (currentPlayer === 1) {
      clickTargets.classList.add('black');
      clickTargets.classList.remove('red');
    } else {
      clickTargets.classList.add('red');
      clickTargets.classList.remove('black');
    }
  }
}


window.addEventListener('DOMContentLoaded', event => {


  let player1El = document.getElementById('player-1-name');
  let player2El = document.getElementById('player-2-name');
  let newGameBtn = document.getElementById('new-game');

  function checkPlayerNames() {
    let player1Name = player1El.value;
    let player2Name = player2El.value;
    if (player1Name && player2Name) {
      newGameBtn.disabled = false;
    } else {
      newGameBtn.disabled = true;
    }
  }

  player1El.addEventListener('keyup', ev => {
    checkPlayerNames();
  })

  player2El.addEventListener('keyup', event => {
    checkPlayerNames();
  })

  newGameBtn.addEventListener('click', event => {
    game = new Game(player1El.value, player2El.value)

    player1El.value = '';
    player2El.value = '';

    checkPlayerNames();

    updateUI();
  })

  let clickTargets = document.getElementById('click-targets');
  clickTargets.addEventListener('click', e => {
    game.playInColumn();
    updateUI();
  })


})
