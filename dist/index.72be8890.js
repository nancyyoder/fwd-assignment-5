console.log("hello nancy");
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(255, 204, 0);
    ellipse(50, 50, 80, 80);
    if (mouseIsPressed) fill(0);
    else fill(255);
    ellipse(mouseX, mouseY, 80, 80);
}

//# sourceMappingURL=index.72be8890.js.map
