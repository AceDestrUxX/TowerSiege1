class Polygon{
    constructor(x, y, sides, radius) {
        var options = {
                     
        }
        this.body = Bodies.polygon(x, y, sides, radius, options);
        this.sides = sides;
        this.radius = radius;
        World.add(world, this.body);
        loadImage("polygon.png")
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        polygonMode(CENTER);
        polygon(0,0,this.sides, this.radius);
        pop();
        imageMode(CENTER);
        image(this.image, this.position.x, this.position.y, 40, 40);
      }
}