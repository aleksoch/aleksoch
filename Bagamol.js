var Tcnox = require("./Tcnox")
module.exports = class Bagamol extends Tcnox {
    constructor(x, y) {
      super(x,y);
      this.energy = 14;

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
        matrix[newY][newX] = 4;
        matrix[this.y][this.x] = 0;
  
        this.x = newX;
        this.y = newY;
        this.energy = 0
      }
  
  
    }
  
    eat() {
      var food = this.random(2);
      var food1 = this.random(3);
      var food2 = this.random(6);
  
      if (food) {
        var newX = food[0];
        var newY = food[1];
        matrix[newY][newX] = 4;
        matrix[this.y][this.x] = 0;
  
        for (var i in xotakerArr) {
          if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
            xotakerArr.splice(i, 1);
          }
        }
  
        this.x = newX;
        this.y = newY;
        this.energy++;
      } 
      else if (food1) {
        var newX = food1[0];
        var newY = food1[1];
        matrix[newY][newX] = 4;
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
      else if (food2) {
        var newX = food2[0];
        var newY = food2[1];
        matrix[newY][newX] = 4;
        matrix[this.y][this.x] = 0
        for (var i in moxetArr) {
          if (moxetArr[i].x == newX && moxetArr[i].y == newY) {
            moxetArr.splice(i, 1);
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
      if (this.energy <= 0) {
        //  console.log("xotaketArr====>", xotaketArr)
        matrix[this.y][this.x] = 0;
        for (var i in bagamotArr) {
          
          if (bagamotArr[i].x == this.x && bagamotArr[i].y == this.y) {
            bagamotArr.splice(i, 1);
          }
        }
      }
    }
  }