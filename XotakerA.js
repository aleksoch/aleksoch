var Tcnox = require("./Tcnox")
var Xotaker = require("./Xotaker")
module.exports = class XotakerA extends Tcnox{
    constructor(x, y) {
      super(x,y);
      this.energy = 4;

    }
    random(ch){
      let found = this.chooseCell(ch);
      let result = Math.floor(Math.random()*found.length)
      return found[result];
  }
  
    mult() {
      var empty = this.random(0);
      if (empty && this.energy > 10) {
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 7;
        var xt = new Xotaker(newX, newY);
        var xta = new XotakerA(newX, newY);
        xotaketArr.push(xt);
        xotakerArr.push(xta);
      }
    }
  
    move() {
      var empty = this.random(0);
      this.energy--;
      if (empty) {
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 7;
        matrix[this.y][this.x] = 0;
  
        this.x = newX;
        this.y = newY;
      }
    }
  
    eat() {
      var food = this.random(1);
      if (food) {
        var newX = food[0];
        var newY = food[1];
        matrix[newY][newX] = 7;
        matrix[this.y][this.x] = 0;
  
        for (var i in grassArr) {
          if (grassArr[i].x == newX && grassArr[i].y == newY) {
            grassArr.splice(i, 1);
          }
        }
  
        this.x = newX;
        this.y = newY;
        this.energy += 2;
      }
    }
  
    die() {
      if (this.energy <= 0) {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
          if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
            xotakerArr.splice(i, 1);
          }
        }
      }
    }
  }