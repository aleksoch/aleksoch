var Tcnox = require("./Tcnox")
var Moxes = require("./Moxes")
module.exports = class MoxesA extends Tcnox {
    constructor(x, y) {
      super(x,y);
      this.energy = 9;
      
    }
    random(ch){
      let found = this.chooseCell(ch);
      let result = Math.floor(Math.random()*found.length)
      return found[result];
  }
  random1(num1,num2){
    let res = Math.floor(Math.random())
    if(res==0){
      return num1
    }
    else if(res==1){
      return num2
    }
   }
    mult() {
      
      var empty = this.random(0);

      if (empty && this.energy > 10) {
        
        let newX = empty[0];
        let newY = empty[1];
        matrix[newY][newX] = this.random(3,6);
        let xt = new Moxes(newX, newY);
        let fg = new MoxesA(newX, newY);
        moxetArr.push(xt);
        moxesArr.push(fg);
      }
  
      
    }
  
    move() {
      var empty = this.random(0);
  
      if (empty) {
        
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 6;
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
        matrix[newY][newX] = 6;
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
        matrix[newY][newX] = 6;
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
        if (this.energy <= -8) {
          this.die();
        }
      }
    }
  
    die() {
      matrix[this.y][this.x] = 0;
      for (var i in moxesArr) {
        if (moxesArr[i].x == this.x && moxesArr[i].y == this.y) {
          moxesArr.splice(i, 1);
        }
      }
    }
  }