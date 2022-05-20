function setup() {
    initializeFields();
    createCanvas(400, 300);
    textSize(40);
}

var choice;

function draw() {
    background(color(0xBC, 0x85, 0x85));
    fill(color(0xF2, 0xC6, 0xF2));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    if (choice == 3)
        rect(50, 200, 150, 2);
    if (choice == 4)
        rect(50, 250, 150, 2);
    text("吃飯", 50, 50);
    text("吃麵", 50, 100);
    text("不要吃", 50, 150);
    text("吃麵包", 50, 200);
    text("吃餅乾", 50, 250);
}

function mousePressed() {
    choice = int(random(5));
}

function initializeFields() {
    choice = -1;
}
