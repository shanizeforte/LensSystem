class Ray {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.angleTan = Math.tan(this.angle);
    this.live = true;
  }

  update(optical) {
    for (let i=0; i<optical.opts.length; i++){
      let lens = optical.opts[i];
      if (Math.abs(this.x - lens.x) <= accu &&
          Math.abs(this.y) <= lens.h/2){
        lens.update(this);
      }
    }
    if (this.live) {
      this.x += 1*dt;
      this.y -= this.angleTan*dt;
    }
  }
  
  draw() {
    if (!this.rayOutOfBounds){
      fill(255, 0, 0);
      noStroke();

      circle(this.x, this.y, 2);
    }
  }
  
  drawPath(optical) {
    noFill();
    stroke(255, 0, 120);
    strokeWeight(1.5);
    
    let x_ = this.x,
        y_ = this.y,
        angle_ = this.angle,
        angleTan_ = this.angleTan;
    
    beginShape();
    let i = 0;
    while (!this.rayOutOfBounds && this.live && i < 2000/dt) {
      vertex(this.x, this.y);
      this.update(optical);
      
      i++;
    }
    endShape();
    
    this.x = x_;
    this.y = y_;
    this.angle = angle_;
    this.angleTan = angleTan_;
    this.live = true;
  }

  get rayOutOfBound() {
    return Math.abs(this.x) <= width/2 && 
           Math.abs(this.y) <= height/2
  }
}