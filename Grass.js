var Tcnox = require("./Tcnox")
module.exports = class Grass extends Tcnox {
    constructor(x, y) {
      super(x,y);
      this.multiply = 0;

    }
    random(ch){
      let found = this.chooseCell(ch);
      let result = Math.floor(Math.random()*found.length)
      return found[result];
  }
    mult() {
      var empty = this.random(0);
      this.multiply++;
      if (empty && this.multiply > 5) {
        var newX = empty[0];
        var newY = empty[1];
        matrix[newY][newX] = 1;
        var newGr = new Grass(newX, newY);
        grassArr.push(newGr);
        this.multiply = 0;
      }
    }
  }
