
class Drop {
    constructor(cx, cy, radius, color, speed) {
        this.x = cx;
        this.y = cy; //how can I randomize you..
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 20; //or 2
    }
    update() {
        this.y = this.y + this.speed; //adds acceleration
        this.speed = this.speed + .1;
        fill(this.color);
        circle(this.x, this.y, this.radius);
    }

    // hitGround() {
    //     console.log(this.x + "drop hits ground")
    // }
}


//instantiating (did I spell that right?) with "new" keyword
var myDrops = [];
myDrops[0] = new Drop(100,10,62, [166,214,222]); //drop size (last #) / color
myDrops[1] = new Drop(10,10,10, [166,214,222]);   //#how far from left edge | #start from top | #size
myDrops[2] = new Drop(200,10,60, [166,214,222]); 
myDrops[3] = new Drop(300,10,38, [166,214,222]); 
myDrops[4] = new Drop(400,10,53, [166,214,222]); 
myDrops[5] = new Drop(500,10,44, [166,214,222]); //there has to be a simpler way to do this.
myDrops[6] = new Drop(600,10,29, [166,214,222]);
myDrops[7] = new Drop(640,10,22, [166,214,222]);
myDrops[8] = new Drop(690,10,48, [166,214,222]); 
myDrops[9] = new Drop(710,10,52, [166,214,222]); 
myDrops[10] = new Drop(745,10,18, [166,214,222]); 
myDrops[11] = new Drop(800,10,18, [166,214,222]); 
myDrops[12] = new Drop(805,10,25, [166,214,222]); 
myDrops[13] = new Drop(820,10,30, [166,214,222]); 
myDrops[14] = new Drop(130,10,18, [166,214,222]); 
myDrops[15] = new Drop(208,10,24, [166,214,222]); 
myDrops[16] = new Drop(260,10,27, [166,214,222]); 
myDrops[17] = new Drop(340,10,22, [166,214,222]); 
myDrops[18] = new Drop(420,10,19, [166,214,222]); 
myDrops[19] = new Drop(530,10,22, [166,214,222]); 
myDrops[20] = new Drop(590,10,29, [166,214,222]); 



//how would I do this counter.. Im such a noob
//when myDrops (y > height) meet heght requirement ---> count myDrops?
// if (circle > 600) {
//     console.log(" hits ground");
// }

function setup() {
    createCanvas(850,600); //canvas size
}

//attempting to change background color...
// var backgroundColor = rgba[242, 247, 255];

function draw() {
    background(34, 32, 79); //background color

    //draw the actual circles
    myDrops[0].update();
    myDrops[1].update();
    myDrops[2].update();
    myDrops[3].update();
    myDrops[4].update();
    myDrops[5].update();
    myDrops[6].update();
    myDrops[7].update();
    myDrops[8].update();
    myDrops[9].update();
    myDrops[10].update();
    myDrops[11].update();
    myDrops[12].update();
    myDrops[13].update();
    myDrops[14].update();
    myDrops[15].update();
    myDrops[16].update();
    myDrops[17].update();
    myDrops[18].update();
    myDrops[19].update();
    myDrops[20].update();
}


//nope.. 
// function gravity() {
//     this.x = random(0, width);
//     this.y = random(0, - height);

//     this.show = function() {
//         noStroke();
//         fill(255);
//         ellipse(this.x, this.y, random(1, 5), random(1, 5));
//     }
//     this.update = function() {
//         this.speed = random(5, 10);
//         this.gravity = 1.05;
//         this.y = this.y + this.speed*this.gravity;

//         if (this.y > height) {
//             this.y = random(0, -height);
//             this.gravity = 0;
//         }
//     }
// }
