class Mirror {
  constructor(x, r, orientation, h = 200) {
    this.x = x;
    this.r = r;
    this.h = h;
    this.orientation = orientation;
  }

  draw() {
    push();

    translate(this.x, 0);
    fill(50, 120, 150, 100);
    stroke(50, 120, 150, 150);
    strokeWeight(3);
    line(0, -this.h / 2, 0, this.h / 2)
    strokeWeight(0);
    if (this.orientation == RIGHT) {
      rect(0, -this.h / 2, -10, this.h)
    } else {
      rect(0, -this.h / 2, 10, this.h)
    }

    pop();
  }

  drawPoints() {}

  update(ray) {
    if (this.orientation == LEFT && ray.angle <= HALF_PI) {
        ray.angle = PI - ray.angle;
    } else {
      ray.live = false
    }
    
  }

}