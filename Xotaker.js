var Tcnox = require("./Tcnox")
module.exports = class Xotaker extends Tcnox{
    constructor(x, y) {
      super(x,y);
      this.energy = 8;

    }
    random(ch){
      let found = this.chooseCell(ch);
      let result = Math.floor(Math.random()*found.length)
      return found[result];
  }
  
   
  
    move() {
      var empty = this.random(0);
      this.energy--;
      if (empty) {
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 2;
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
        matrix[newY][newX] = 2;
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
        //  console.log("xotaketArr====>", xotaketArr)
        matrix[this.y][this.x] = 0;
        for (var i in xotaketArr) {
          
          if (xotaketArr[i].x == this.x && xotaketArr[i].y == this.y) {
            xotaketArr.splice(i, 1);
          }
        }
      }
    }
  }