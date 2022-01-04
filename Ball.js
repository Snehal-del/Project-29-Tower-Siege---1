class Ball {

constructor(x, y, r) {

var options = {
    density: 1,
    friction: 1,  
    resitution: 0.8
};

this.x = x;
this.y = y;
this.r = r;
this.image = loadImage("polygon.png"); 
this.body = Bodies.circle(this.x, this.y, this.r, options);
World.add(world, this.body);

}

display() {

var Pos = this.body.position;

push()

translate(Pos.x, Pos.y);
rectMode(CENTER);
fill(255, 0, 255);
imageMode(CENTER);
image(this.image, 0, 0, this.r + 20, this.r + 20);

pop()
   }
}