const game = {
  title: 'Green Mode',
  isRunning: false,
  gameBoard: document.querySelector('.game-board'),
  scoreBoard: document.querySelector('.score-board'),
  playerForm: document.querySelector('.player-form'),
  joinGameButton: document.querySelector('#start-game-button'),
  scorePointsButton: document.querySelector('#score-points-button'),
  playerNameDisplay: document.querySelector('.player-name-display'),
  playerScoreDisplay: document.querySelector('.player-score-display'),
  toggleGame: () => {
    console.log(`beginning of toggleGame: ${isRunning}`);
    isRunning = !isRunning;
    console.log(`end of toggleGame: ${isRunning}`);
  },
  //   updatePlayerName: ()
};
