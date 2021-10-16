class Ball
{
  constructor(x, y, r ) 
  {
    let options = {
    restitution: 0.9
    };
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke("red");
    fill("blue");
    ellipse(pos.x, pos.y, this.r);
    pop();
  }
  
}


