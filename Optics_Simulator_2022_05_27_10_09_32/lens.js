class Lens {
  constructor(x, f, h = 200) {
    this.x = x;
    this.f = f;
    this.h = h;
  }

  draw() {
    push();

    translate(this.x, 0);
    fill(0, 220, 250, 150);
    stroke(0, 200, 230, 150);

    beginShape();

    let h = this.h / 2;
    let f = Math.abs(this.f) * 10;
    let r = sqrt(h ** 2 + (f) ** 2);
    let alpha_ = atan(h / Math.abs(f))

    if (this.f >= 0) {
      // Convex lens
      for (let alpha = alpha_; alpha > -alpha_; alpha -= 0.0005) {
        vertex(r * cos(alpha) - f, r * sin(alpha))
      }

      for (let alpha = -alpha_; alpha < alpha_; alpha += 0.0005) {
        vertex(f - r * cos(alpha), r * sin(alpha))
      }
    } else {
      // Concave lens
      for (let alpha = alpha_; alpha > -alpha_; alpha -= 0.0005) {
        vertex(r * cos(alpha)-r-1, r * sin(alpha))
      }

      for (let alpha = -alpha_; alpha < alpha_; alpha += 0.0005) {
        vertex(-r * cos(alpha)+r+1, r * sin(alpha))
      }
      vertex(r * cos(alpha_)-r-1, this.h/2)
    }

    endShape();

    pop();
  }

  drawPoints() {
    push();
    translate(this.x, 0);

    noStroke();

    fill(0, 220, 0, 150)
    circle(-this.f, 0, 5);

    fill(0, 0, 220, 150)
    circle(this.f, 0, 5);

    pop();
  }

  update(ray) {
    if (ray.angle <= HALF_PI) {
      ray.angleTan = ray.angleTan + ray.y / this.f
    } else {
      ray.angleTan = PI - ray.angleTan + ray.y / this.f;
    }
  }

}