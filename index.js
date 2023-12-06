const Player = require('./src/models/player');
const Game = require('./src/services/game');

const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

const game = new Game(playerA, playerB);
const winner = game.play();


console.log(`${winner === playerA ? 'Player A' : 'Player B'} wins the game!`);

