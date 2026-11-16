let canvas = document.querySelector("canvas");
let pen = canvas.getContext("2d");
let coords = [[0,0]]
let cell = 50;
let direction = "right";
let gameOver = false;

let id = setInterval(()=>{
    shape()
    update()
},80)

document.addEventListener("keydown",function(e){
    if (e.key=="ArrowRight") {
        direction="right"
    } else if (e.key=="ArrowLeft") {
        direction="left"
    } else if (e.key=="ArrowUp") {
        direction="up"
    } else if (e.key=="ArrowDown") {
        direction="down"
    }
})

function shape() {
    if (gameOver) {
        clearInterval(id)
        return;
    }
    pen.clearRect(0,0,1200,600);
    pen.fillStyle="skyblue";
    for (i of coords) {
        pen.fillRect(i[0],i[1],cell,cell);
    }
}

function update() {
    let headX = coords[0][0]
    let headY = coords[0][1]
    let newX
    let newY
    if (direction=="right") {
        newX = headX + cell
        newY = headY
        if (newX == 1200) {
            gameOver = true
        }
    }
    if (direction=="left") {
        newX = headX - cell
        newY = headY
        if (newX < 0) {
            gameOver = true
        }
    }
    if (direction=="up") {
        newX = headX
        newY = headY - cell
        if (newY < 0) {
            gameOver = true
        }
    }
    if (direction=="down") {
        newX = headX
        newY = headY + cell
        if (newY == 600) {
            gameOver = true
        }
    }
    coords.push([newX,newY])
    coords.shift()
}