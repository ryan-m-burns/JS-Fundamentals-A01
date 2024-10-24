'use strict';

const game = {
  title: 'Pink Mode',
  isRunning: false,
  players: [],
  activePlayer: null,
  gameBoard: document.querySelector('#game-board'),
  scoreBoard: document.querySelector('#score-board'),
  playerForm: document.querySelector('.player-form'),
  joinGameButton: document.querySelector('#join-game-button'),
  startGameButton: document.querySelector('#start-game-button'),
  switchPlayerButton: document.querySelector('#switch-player-button'),
  scorePointsButton: document.querySelector('#score-points-button'),
  body: document.querySelector('body'),

  createAndAppendElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
  },

  addPlayer(playerObj) {
    const playerIndex = this.players.length;
    this.players.push(playerObj);

    const div = this.createAndAppendElement('div', `player${playerIndex}`);
    const nameP = this.createAndAppendElement('p', `player${playerIndex}-name`, playerObj.name);
    const scoreP = this.createAndAppendElement(
      'p',
      `player${playerIndex}-score`,
      playerObj.score ? playerObj.score : '0'
    );
    div.append(nameP, scoreP);
    this.scoreBoard.append(div);
  },

  updatePlayerScore(playerIndex) {
    const randomNumber = Math.ceil(Math.random() * 10);
    let player = this.players[playerIndex];
    player.updatePlayerScore(randomNumber);
    this.scoreBoard.querySelector(`.player${playerIndex}-score`).textContent = player.score;
  },

  toggleGameMode() {
    this.playerForm.hidden = true;
    this.activePlayer = this.activePlayer ? this.activePlayer : 0;
    this.scoreBoard.querySelector(`.player${this.activePlayer}`).classList.add('featured');
    this.isRunning = !this.isRunning;
    this.startGameButton.textContent = this.isRunning ? 'Pause' : 'Resume';
    this.scorePointsButton.disabled = !this.isRunning;
    this.switchPlayerButton.disabled = !this.isRunning;
    this.body.classList.toggle('paused', !this.isRunning);
    this.scoreBoard.classList.toggle('greyed', !this.isRunning);
  },

  switchActivePlayer() {
    this.activePlayer = this.activePlayer + 1 >= this.players.length ? 0 : this.activePlayer + 1;
    this.scoreBoard.querySelector('.featured').classList.remove('featured');
    this.scoreBoard.querySelector(`.player${this.activePlayer}`).classList.add('featured');
  },

  init() {
    this.playerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const playerName = document.getElementById('player-name').value;
      if (playerName) {
        this.addPlayer(new player(playerName));
        if (this.players.length > 1) this.startGameButton.disabled = false;
      }
    });
    this.startGameButton.addEventListener('click', () => this.toggleGameMode());
    this.scorePointsButton.addEventListener('click', () =>
      this.updatePlayerScore(this.activePlayer)
    );
    this.switchPlayerButton.addEventListener('click', () => this.switchActivePlayer());
  }
};

class player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  updatePlayerScore(addToScore) {
    this.score += addToScore;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  game.init();
});
