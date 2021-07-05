
class Circle {
    constructor(cx, cy, radius, color) {
        this.x = cx;
        this.y = cy;
        this.radius = radius;
        this.color = color;
        this.speed = 1 + Math.random() * 20; //or 2
    }

    update() {
        this.y = this.y + this.speed;
        //added acceleration
        this.speed = this.speed + .1;
        fill(this.color);
        circle(this.x, this.y, this.radius);
    }
}

var myCircles = [];
myCircles[0] = new Circle(100,10,100, [166,214,222]);
myCircles[1] = new Circle(300,10,100, [227,137,64]);
// var myCircle = new Circle(100, 10, 100, [166, 214, 222]);


function setup() {
    createCanvas(800, 300);
}

function draw() {
    background(34,32,79);

    myCircles[0].update();
    myCircles[1].update();
}