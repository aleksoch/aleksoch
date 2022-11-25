var Tcnox = require("./Tcnox")
var Bagamol = require("./Bagamol")

module.exports = class BagamolA extends Tcnox {
    constructor(x, y) {
      super(x,y);
      this.energy = 9;
    }
  
    random(ch){
      let found = this.chooseCell(ch);
      let result = Math.floor(Math.random()*found.length)
      return found[result];
  }
    mult() {
      
      var empty = this.random(0);  
      if (empty && this.energy > 15) { 
        let newX = empty[0];
        let newY = empty[1];
        matrix[newY][newX] = 5;
        let uj = new Bagamol(newX, newY);
        let hj = new BagamolA(newX, newY);
        bagamotArr.push(uj);
        bagamolArr.push(hj);
        this.energy = 0
      }

    }
  
    move() {
      var empty = this.random(0);
      
      this.energy--;
      if (empty) {
       
  
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 5;
        matrix[this.y][this.x] = 0;
  
        this.x = newX;
        this.y = newY;
        this.energy = 0
      }
  
  
    }
  
    eat() {
      var food = this.random(2);
      var food1 = this.random(3);
     

  
      if (food) {
        var newX = food[0];
        var newY = food[1];
        matrix[newY][newX] = 5;
        matrix[this.y][this.x] = 0;
  
        for (var i in xotakerArr) {
          if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
            xotakerArr.splice(i, 1);
          }
        }
        
  
        this.x = newX;
        this.y = newY;
        this.energy++;
      } else if (food1) {
        var newX = food1[0];
        var newY = food1[1];
        matrix[newY][newX] = 5;
        matrix[this.y][this.x] = 0
        for (var i in moxesArr) {
          if (moxesArr[i].x == newX && moxesArr[i].y == newY) {
            moxesArr.splice(i, 1);
          }
        }
  
        this.x = newX;
        this.y = newY;
        this.energy += 2;
      } 
      
      
      
      
      
      else {
        this.move();
        
  
        if (this.energy <= -1) {
          this.die();
        }
      }
    }
  
    die() {
      matrix[this.y][this.x] = 0;
      for (var i in bagamolArr) {
        if (bagamolArr[i].x == this.x && bagamolArr[i].y == this.y) {
          bagamolArr.splice(i, 1);
        }
      }
    }
  }