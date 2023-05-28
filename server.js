var fs = require("fs")
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3001);
matrix = []
grassArr = [];
xotakerArr = [];
xotaketArr = [];
moxesArr = [];
moxetArr = [];
bagamotArr = [];
bagamolArr = [];


var Grass = require("./Grass")
var Xotaker = require("./Xotaker")
var XotakerA = require("./XotakerA")
var Moxes = require("./Moxes")
var Bagamol = require("./Bagamol")
var BagamolA = require("./BagamolA")
var MoxesA = require("./MoxesA")


function generate(a, gr, grEat, mox, bag, baga, moxa, grEata) {
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < a; j++) {

            matrix[i].push(0)
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1
        }
    }

    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2
        }
    }

    for (let i = 0; i < grEata; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7
        }
    }

    for (let i = 0; i < mox; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3
        }
    }
    for (let i = 0; i < moxa; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6
        }
    }
    for (let i = 0; i < bag; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4
        }
    }
    for (let i = 0; i < baga; i++) {
        let x = Math.floor(Math.random() * a)
        let y = Math.floor(Math.random() * a)
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5
        }
    }
    

    io.emit("send matrix", matrix);

}

generate(80, 300, 200, 5, 1, 20, 5, 200)




function createObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotaketArr.push(xt)
                
            }
            else if (matrix[y][x] == 7) {
                var xta = new XotakerA(x, y)
                xotakerArr.push(xta)
            }
            else if (matrix[y][x] == 3) {
                var sd = new Moxes(x, y)
                moxetArr.push(sd)
            }
            else if (matrix[y][x] == 4) {
                var uj = new Bagamol(x, y)
                bagamotArr.push(uj)
            }
            else if (matrix[y][x] == 5) {
                var hj = new BagamolA(x, y)
                bagamolArr.push(hj)
            }
            else if (matrix[y][x] == 6) {
                var fg = new MoxesA(x, y)
                moxesArr.push(fg)
            }
            
        }
    }
    io.emit("send matrix", matrix);

}

function game() {

    for (let i in grassArr) {
        grassArr[i].mult()
    }
    
    for (let i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (let i in xotaketArr) {
        xotaketArr[i].eat()
        xotaketArr[i].move()
        xotaketArr[i].die()
    }
    for (let i in moxesArr) {
        moxesArr[i].mult()
        moxesArr[i].eat()
    }
    for (let i in moxetArr) {
        moxetArr[i].eat()


    }
    for (let i in bagamolArr) {
        bagamolArr[i].mult()
        bagamolArr[i].eat()
        // bagamolArr[i].die()
        // bagamolArr[i].move()


    }
    for (let i in bagamotArr) {
        bagamotArr[i].move()
        // bagamotArr[i].die()
        // bagamotArr[i].move()

    }

    let obj =  {
     Grass: grassArr.length,
     Grasseater: xotaketArr.length,
     lizard: moxetArr.length,
     lizardGirl: moxesArr.length,
     GrasseaterGirl: xotakerArr.length,
     Bogomol: bagamotArr.length,
     BogomolGirl: bagamolArr.length

    }

    io.emit("chap", obj)
    fs.writeFileSync("chap.json", JSON.stringify(obj));

    io.emit("send matrix", matrix);

}

createObjects()

setInterval(game, 50)


io.on('connection', function(socket){
    socket.emit("send matrix", matrix);
})



