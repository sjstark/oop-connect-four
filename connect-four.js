import { Game } from './game.js';
import GameJsonSerializer from './GameJsonSerializer.js';
import GameJsonDeserializer from './GameJsonDeserializer.js';

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

    for (let row = 0; row <= 5; row ++) {
      for (let col = 0; col <= 6; col++) {
        let selectedElement = document.getElementById(`square-${row}-${col}`)
        // console.log(selectedElement);
        let playerId = game.getTokenAt(row, col);
        selectedElement.innerHTML = '';
        if (playerId === 1){
          let child = document.createElement('div');
          child.classList.add('token' , 'black');
          selectedElement.appendChild(child);
        } else if (playerId === 2) {
          let child = document.createElement("div");
          child.classList.add("token", "red");
          selectedElement.appendChild(child);
        }

      }
    }

    for (let i = 0; i <= 6; i++) {
      let col = document.getElementById(`column-${i}`)
      if (game.isColumnFull(i)) {
        col.classList.add('full')
      } else {
        col.classList.remove('full')
      }

    }

  }

  let parser = new GameJsonSerializer(game);
  let gameData = parser.serialize();

  localStorage.setItem('connect-four-game-save', gameData)
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

    let columnIndex = Number(e.target.id.slice(-1))

    game.playInColumn(columnIndex);
    updateUI();
  })


  if (localStorage.getItem('connect-four-game-save') !== undefined) {
    let parser = new GameJsonDeserializer(localStorage.getItem('connect-four-game-save'))
    game = parser.deserialize();
  }
})
