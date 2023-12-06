const assert = require('assert');
const Player = require('../src/models/player');
const Game = require('../src/services/game');

const testLowerHealthPlayerAttacksFirst = () => {
  const playerA = new Player(50, 5, 10);
  const playerB = new Player(40, 8, 12);

  const game = new Game(playerA, playerB);
  const firstPlayer = game.players[0];

  assert.ok(firstPlayer instanceof Player);
  assert.strictEqual(firstPlayer, playerA, 'Player with lower health should attack first');
};


testLowerHealthPlayerAttacksFirst();