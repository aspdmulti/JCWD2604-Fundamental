class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
  hit(power) {
    this.health -= power;
  }
  useItem(item) {
    if (item == "health") {
      this.health += 10;
      return `${this.name} get health booster !`;
    } else if (item == "power") {
      this.power += 10;
      return `${this.name} get power booster !`;
    } else {
      return `${this.name} get nothing !`;
    }
  }
  showStatus() {
    return `${this.name} : health => ${this.health} , power => ${this.power}`;
  }
}
class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandomItem(player) {
    const random = Math.random();
    if (random < 0.3) {
      return player.useItem("health");
    } else if (random > 0.7) {
      return player.useItem("power");
    } else {
      return player.useItem("none");
    }
  }
  start(player1, player2) {
    while (player1.health > 0 && player2.health > 0) {
      console.log("Get Ready");
      console.log("Set");
      console.log("Shoot !");
      console.log(player1.showStatus());
      console.log(player2.showStatus());
      console.log(this.getRandomItem(player1));
      console.log(this.getRandomItem(player2));
      let randomturn = Math.random();
      if (randomturn < 0.5) {
        player1.hit(player2.power);
        if (player1.health < 0) {
          break;
        } else {
          player2.hit(player1.power);
        }
      } else {
        player2.hit(player1.power);
        if (player2.health < 0) {
          break;
        } else {
          player1.hit(player2.power);
        }
      }
      console.log("AFtermath :");
      console.log(player1.showStatus());
      console.log(player2.showStatus());
    }
    console.log("AFtermath :");
    console.log(player1.showStatus());
    console.log(player2.showStatus());
    if (player1.health > 0) {
      console.log(`${player1.name} Win !`);
    } else if (player2.health > 0) {
      console.log(`${player2.name} Win !`);
    } else {
      console.log(`Draw !`);
    }
  }
}
const angga = new Player("Angga");
const ikmal = new Player("Ikmal");
const shooter = new ShootingGame();
shooter.start(angga, ikmal);
