class Screen {
  constructor(x, h) {
    this.x = x;
    this.h = h;
  }
  
  draw() {
    push();
    translate(this.x, 0);
    
    stroke(0);
    strokeWeight(3)
    
    line(0, this.h/2, 0, -this.h/2);
    
    pop();
  }
  
  update(ray) {
    ray.live = false
  }
  
  drawPoints() {}
  
}