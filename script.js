// let matrix = []
// function generate(a,gr,grEat,mox,bag) {
//     for (let i = 0; i < a; i++) {
//         matrix.push([])
//         for (let j = 0; j < a; j++) {    
            
//             matrix[i].push(0)
//         }
//     }
     
//      for (let i = 0; i < gr; i++) {
//          let x = Math.floor(Math.random()*a)
//          let y = Math.floor(Math.random()*a)
//          if(matrix[x][y] == 0) {
            
//              matrix[x][y] = 1
//          } 
//      }
     
//     for (let i = 0; i < grEat; i++) {
//         let x = Math.floor(Math.random()*a)
//         let y = Math.floor(Math.random()*a)
//         if(matrix[x][y] == 0) {
//             matrix[x][y] = 2
//         } 
//     }
    
//     for (let i = 0; i < mox; i++) {
//         let x = Math.floor(Math.random()*a)
//         let y = Math.floor(Math.random()*a)
//         if(matrix[x][y] == 0) {
//             matrix[x][y] = 3
//         } 
//     }
//     for (let i = 0; i < bag; i++) {
//         let x = Math.floor(Math.random()*a)
//         let y = Math.floor(Math.random()*a)
//         if(matrix[x][y] == 0) {
//             matrix[x][y] = 4
//         } 
//     }
// }

// generate(80, 220,400, 10,80)
let socket = io()
var side = 10;
// var grassArr = [];
// var xotakerArr = [];
// var moxesArr = [];
// var bagamolArr = [];

// function createObjects(){
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 var gr = new Grass(x, y)
//                 grassArr.push(gr)
//             }
//             else if (matrix[y][x] == 2) {
//                 var xt = new Xotaker(x, y)
//                 xotakerArr.push(xt)
//             }
//             else if (matrix[y][x] == 3) {
//                 var sd = new Moxes(x, y)
//                 moxesArr.push(sd)
//             }
//             else if (matrix[y][x] == 4) {
//                 var uj = new Bagamol(x, y)
//                 bagamolArr.push(uj)
//             }
            
            
            
//         }
//     }
// }

// createObjects()

function setup() {
    
    noStroke()
    // createCanvas(matrix[0].length * side, matrix.length * side);
    createCanvas(700,700)
    background('#acacac');
}




function draww(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("purple");
            }
            else if (matrix[y][x] == 5) {
                fill("#D500FF");
            }
            else if (matrix[y][x] == 6) {
                fill("#FF5500");
            }



            

            ellipse (x * side, y * side, side, side);

           
        }
    }

//     for (let i in grassArr) {
//         grassArr[i].mult()
//     }


//     for (let i in xotakerArr) {
//         xotakerArr[i].eat()
//         xotakerArr[i].move()
//         xotakerArr[i].mult()
//         xotakerArr[i].die()
//     }

//     for (let i in moxesArr) {
//         moxesArr[i].mult()
//         moxesArr[i].eat()
       
    

// }
// for (let i in bagamolArr) {
//      bagamolArr[i].mult()
//      bagamolArr[i].eat()
//  }
}


socket.on('send matrix', draww);
