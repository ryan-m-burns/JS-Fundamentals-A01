(function (d) {
  const game = {
    title: 'Green Mode',
    isRunning: false,

    gameBoard: d.querySelector('#game-board'),
    scoreBoard: d.querySelector('#score-board'),
    playerForm: d.querySelector('.player-form'),
    joinGameButton: d.querySelector('#join-game-button'),
    startGameButton: d.querySelector('#start-game-button'),
    scorePointsButton: d.querySelector('#score-points-button'),
    playerNameDisplay: d.querySelector('.player-name-display'),
    playerScoreDisplay: d.querySelector('.player-score-display'),

    toggleRunning() {
      this.isRunning = !this.isRunning;
      if (this.isRunning) {
        this.startGameButton.textContent = 'Pause';
        this.scorePointsButton.disabled = false;
        d.querySelector('body').classList.remove('paused');
        this.scoreBoard.classList.remove('greyed');
      } else {
        this.startGameButton.textContent = 'Resume';
        this.scorePointsButton.disabled = true;
        d.querySelector('body').classList.add('paused');
        this.scoreBoard.classList.add('greyed');
      }
    },

    updatePlayerName(playerName) {
      this.playerNameDisplay.textContent = playerName;
    },

    updatePlayerScore(currentScore) {
      this.playerScoreDisplay.textContent = currentScore;
    }
  };

  const player = {
    name: 'Player 0',
    score: 0,

    updatePlayerName() {
      this.name = d.getElementById('player-name').value;
      console.log(this.name);
      game.updatePlayerName(this.name);
    },

    updatePlayerScore() {
      this.score += 2;
      game.updatePlayerScore(this.score);
    }
  };

  game.joinGameButton.addEventListener('click', () => {
    if (d.getElementById('player-name').value) {
      player.updatePlayerName();
      game.joinGameButton.disabled = true;
      game.playerForm.hidden = true;
      game.startGameButton.disabled = false;
    }
  });

  game.startGameButton.addEventListener('click', () => game.toggleRunning());
  game.scorePointsButton.addEventListener('click', () => player.updatePlayerScore());
})(document);
