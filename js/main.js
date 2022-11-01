const rows = 18;
const columns = 18;
const padding = 50;
const cell_size = 35;

let bgColorR = 255; 
let bgColorG = 204;
let bgColorB =  0;

let cellR = 0;
let cellG = 0;
let cellB = 0;

const cell_count = rows * columns;
const index = 0;

let cells = [];

function setup() {
    var cnv = createCanvas(720, 720);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

    for(let col=0; col < columns; col++){
        for(let row=0; row< rows; row++){

            let left = padding+(col*cell_size);
            let top = padding+(row*cell_size);
            let size_real = cell_size - 2;

            cells.push(new Cell(left, top, size_real, size_real));
        }
    }
}



function draw() {
    background(bgColorR, bgColorG, bgColorB);
    noStroke();
    color(cellR, cellG, cellB);

    for(let i = 0; i < cell_count; i++){
        cells[i].display();
    }

    if(mouseIsPressed){
        // text('Disco!', 20, 20);
        for(let i = 0; i < cell_count; i++){
            cells[i].display();
            cells[i].randomColor();
        }
    }

}

class Cell {
    constructor(left, top, size_x, size_y, cell_color) {
        this.left = left;
        this.top = top;
        this.x = size_x;
        this.y = size_y;
    }

    display() {
        fill(cellR, cellG, cellB);
        rect(this.left, this.top, this.x, this.y);
    }

    randomColor() {
        cellR = int(random(255));
        cellG = int(random(255));
        cellB = int(random(255));
    }

    // flicker() {
    //     let choices = [0, 1];
    //     let i = random(choices);
    //     if(i == 0){
    //         fill('white')
            
    //     }
    //     else {
    //         fill('black')
    //     }
    // }



    // cellFill(color) {
    //     let colorReal = "'" + color + "'"
    //     fill(colorReal)
    //     console.log(colorReal)
    // }
}

// function rCells() {
//     for(let i = 0; i < cell_count; i++){
//         cells[i].display();
//     }
// }

// function crazyCells() {
//     for(let i = 0; i < cell_count; i++){
//         cells[i].display();
//         cells[i].flicker();
//     }
// }

