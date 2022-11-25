var Tcnox = require("./Tcnox")
module.exports = class Moxes extends Tcnox {
    constructor(x, y) {
      super(x,y);
      this.energy = 11;
      
    }
    random(ch){
      let found = this.chooseCell(ch);
      let result = Math.floor(Math.random()*found.length)
      return found[result];
  }
    
  
    move() {
      var empty = this.random(0);
  
      if (empty) {
        
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 3;
        matrix[this.y][this.x] = 0;
  
        this.x = newX;
        this.y = newY;
      }
  
  
      
    }
  
    eat() {
      var food = this.random(2);
      var food1 = this.random(1)
  
      if (food) {
        var newX = food[0];
        var newY = food[1];
        matrix[newY][newX] = 3;
        matrix[this.y][this.x] = 0;
  
        for (var i in xotakerArr) {
          if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
            xotakerArr.splice(i, 1);
          }
        }
  
        this.x = newX;
        this.y = newY;
        this.energy += 3;
  
      }
      if (food1) {
        var newX = food1[0];
        var newY = food1[1];
        matrix[newY][newX] = 3;
        matrix[this.y][this.x] = 0;
  
        for (var i in grassArr) {
          if (grassArr[i].x == newX && grassArr[i].y == newY) {
            grassArr.splice(i, 1);
          }
        }
  
        this.x = newX;
        this.y = newY;
        this.energy++;
  
      }


      
      
      
      else {
        this.move();
        this.energy--;
        if (this.energy <= 2) {
          this.die();
        }
      }
    }
  
    die() {
      matrix[this.y][this.x] = 0;
      for (var i in moxetArr) {
        if (moxetArr[i].x == this.x && moxetArr[i].y == this.y) {
          moxetArr.splice(i, 1);
        }
      }
    }
  }