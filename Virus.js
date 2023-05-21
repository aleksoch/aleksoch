var Tcnox = require("./Tcnox")
module.exports = class Virus extends Tcnox{
    constructor(x, y) {
        super(x,y);
    }
    move() {
        var empty = this.random(0);
        
        if (empty) {
          var newX = empty[0];
          var newY = empty[1];
          matrix[newY][newX] = 8;
          matrix[this.y][this.x] = 0;
    
          this.x = newX;
          this.y = newY;
        }
      }
      eat() {
        var food = this.random(2);
        var food2 = this.random(7);
        var food1 = this.random(1);
        var food3 = this.random(3);
        var food6 = this.random(6);
        var food4 = this.random(4);
        var food5 = this.random(5);
        if (food) {
          var newX = food[0];
          var newY = food[1];
          matrix[newY][newX] = 8;
          matrix[this.y][this.x] = 0;
    
          for (var i in xotakerArr) {
            if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
              xotakerArr.splice(i, 1);
            }
          }
    
          this.x = newX;
          this.y = newY;
          
    
        }
        if (food5) {
          var newX = food5[0];
          var newY = food5[1];
          matrix[newY][newX] = 8;
          matrix[this.y][this.x] = 0;
    
          for (var i in xotakerArr) {
            if ( bagamolArr[i].x == newX &&  bagamolArr[i].y == newY) {
              bagamolArr.splice(i, 1);
            }
          }
    
          this.x = newX;
          this.y = newY;
          
    
        }
        if (food4) {
          var newX = food4[0];
          var newY = food4[1];
          matrix[newY][newX] = 8;
          matrix[this.y][this.x] = 0;
    
          for (var i in xotakerArr) {
            if (bagamotArr[i].x == newX && bagamotArr[i].y == newY) {
              bagamotArr.splice(i, 1);
            }
          }
    
          this.x = newX;
          this.y = newY;
          
    
        }
        if (food6) {
          var newX = food6[0];
          var newY = food6[1];
          matrix[newY][newX] = 8;
          matrix[this.y][this.x] = 0;
    
          for (var i in xotakerArr) {
            if (moxesArr[i].x == newX && moxesArr[i].y == newY) {
              moxesArr.splice(i, 1);
            }
          }
    
          this.x = newX;
          this.y = newY;
          
    
        }
        if (food3) {
          var newX = food3[0];
          var newY = food3[1];
          matrix[newY][newX] = 8;
          matrix[this.y][this.x] = 0;
    
          for (var i in xotakerArr) {
            if (moxetArr[i].x == newX && moxetArr[i].y == newY) {
              moxetArr.splice(i, 1);
            }
          }
    
          this.x = newX;
          this.y = newY;
         
    
        }
        if (food1) {
          var newX = food1[0];
          var newY = food1[1];
          matrix[newY][newX] = 8;
          matrix[this.y][this.x] = 0;
    
          for (var i in grassArr) {
            if (grassArr[i].x == newX && grassArr[i].y == newY) {
              grassArr.splice(i, 1);
            }
          }
    
          this.x = newX;
          this.y = newY;
          
    
        }
        if (food2) {
          var newX = food2[0];
          var newY = food2[1];
          matrix[newY][newX] = 8;
          matrix[this.y][this.x] = 0;
    
          for (var i in xotaketArr) {
            if (xotaketArr[i].x == newX && xotaketArr[i].y == newY) {
              xotaketArr.splice(i, 1);
            }
          }
    
          this.x = newX;
          this.y = newY;
          
        }
      }
      mult() {
        var empty = this.random(0);
        this.multiply++;
        if (empty && this.multiply > 5) {
          var newX = empty[0];
          var newY = empty[1];
          matrix[newY][newX] = 8;
          var newVIR = new Virus(newX, newY);
          virusArr.push(newVIR);
          this.multiply = 0;
        }
      }
      
}

