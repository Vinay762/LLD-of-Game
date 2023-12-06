class Player {
    constructor(health, strength, attack) {
      this.health = health;
      this.strength = strength;
      this.attack = attack;
    }
  
    isAlive() {
      return this.health > 0;
    }
  
    takeDamage(damage) {
      this.health -= damage;
      if (this.health < 0) {
        this.health = 0;
      }
    }
  
    rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
  }
  
  module.exports = Player;
  