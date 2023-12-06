const Player = require('../models/player');

class Game {
  constructor(playerA, playerB) {
    this.players = playerA.health < playerB.health ? [playerA, playerB] : [playerB, playerA];
  }

  play() {

    while (this.players[0].isAlive() && this.players[1].isAlive()) {
      const attacker = this.players[0];
      const defender = this.players[1];

      const attackRoll = attacker.rollDice();
      const defenseRoll = defender.rollDice();

      const attackDamage = attackRoll * attacker.attack;
      const defenseDamage = defenseRoll * defender.strength;

      const damageDealt = Math.max(0, attackDamage - defenseDamage);
      defender.takeDamage(damageDealt);

      
      this.players.push(this.players.shift());
    }

    return this.players[0].isAlive() ? this.players[0] : this.players[1];
  }
}

module.exports = Game;
