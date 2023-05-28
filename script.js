
let socket = io()
var side = 10;


function setup() {

    noStroke()
    createCanvas(80 * side, 80 * side)
    background('#acacac');
}
let automnargument = false;
let automn = document.getElementById("automn");
automn.addEventListener('click', function () {
    automnargument = true;
    summerArgument = false;
    winterargument = false;
    garunargument = false;
})
let winterargument = false;
let winter = document.getElementById("winter");
winter.addEventListener('click', function () {
    winterargument = true;
    summerArgument = false;
    automnargument = false;
    garunargument = false;
})
let summerArgument = false;
let summer = document.getElementById("summer");
summer.addEventListener('click', function () {
    winterargument = false;
    summerArgument = true;
    automnargument = false;
    garunargument = false;
})
let garunargument = false;
let garun = document.getElementById("garun");
garun.addEventListener('click', function () {
    automnargument = false;
    summerArgument = false;
    winterargument = false;
    garunargument = true;
})





function draww(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] === 1) {
                if (winterargument === true) {
                    fill("white");
                }
                else if (winterargument === false) {
                    fill("green");
                }
                if (automnargument === true) {
                    fill("#816919");
                }
                if(garunargument === true ){
                    fill("#A2FF33")
                }
            }
               // else if (matrix[y][x] == 8){
                //    fill("#33FFF0")
               // } 

                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 7) {
                    fill("#A6FF00");
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





                ellipse(x * side, y * side, side, side);


            
        }

    }

}
    socket.on('send matrix', draww);


    socket.on("chap", function (obj){
        document.getElementById("Grass").innerText = `Grass: ${obj.Grass}`;
        document.getElementById("Grasseater").innerText = `Grasseater: ${obj.Grasseater}`;
        document.getElementById("lizard").innerText = `lizard: ${obj.lizard}`;
        document.getElementById("lizardGirl").innerText = `lizardGirl: ${obj.lizardGirl}`;
        document.getElementById("GrasseaterGirl").innerText = `GrasseaterGirl: ${obj.GrasseaterGirl}`;
        document.getElementById("Bogomol").innerText = `Bogomol: ${obj.Bogomol}`;
        document.getElementById("BogomolGirl").innerText = `BogomolGirl: ${obj.BogomolGirl}`;
    })