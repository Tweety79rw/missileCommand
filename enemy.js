class Enemy extends Missile{
  constructor() {
    super(createVector(random(width), 0), createVector(random(width), 700));
    this.origin = createVector(this.pos.x, this.pos.y);
    this.maxVel = 1;
    this.killed = false;
    this.r = 0;
  }
  render() {
    push();
    stroke(255);
    noFill();
    line(this.pos.x,this.pos.y, this.origin.x,this.origin.y);
    pop();
  }
}
