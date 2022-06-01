class Optical {
  constructor(opts = [], rays = []) {
    this.opts = opts;
    this.rays = rays;
  }

  setup(cnv) {
    cnv.mousePressed(this.optDown.bind(this));
    cnv.mouseReleased(this.optUp.bind(this));
    cnv.mouseMoved(this.optMove.bind(this));
  }

  addOpt(lens) {
    this.opts.push(lens);
  }

  addRay(ray) {
    this.rays.push(ray);
  }

  update(n) {
    // Update rays
    for (let i = 0; i < this.rays.length; i++) {
      for (let j = 0; j < n; j++) {
        this.rays[i].update(this)
      }
    }
  }

  drawRays() {
    // Draw rays
    for (let i = 0; i < this.rays.length; i++) {
      this.rays[i].draw();
    }
  }

  drawPath() {
    // Draw rays
    for (let i = 0; i < this.rays.length; i++) {
      this.rays[i].drawPath(this);
    }
  }

  drawOpts() {
    for (let i = 0; i < this.opts.length; i++) {
      this.opts[i].draw();
    }
  }

  drawOptPoints() {
    for (let i = 0; i < this.opts.length; i++) {
      this.opts[i].drawPoints();
    }
  }

  get optOver() {
    for (let i = 0; i < this.opts.length; i++) {
      if (Math.abs(this.opts[i].x - (mouseX - width / 2)) <= 10) {
        return this.opts[i]
      }
    }
    return false
  }

  optDown() {
    let lens = this.optOver;
    if (lens) {
      this.movingOpt = lens;
      this.mouseX = mouseX - lens.x;
    }
  }

  optMove() {
    let lens = this.optOver;
    
    if (lens) {
      cursor('grab');
    } else {
      cursor();
    }

    if (this.movingOpt) {
      this.movingOpt.x = -this.mouseX + mouseX;
    }
  }

  optUp() {
    this.movingOpt = false;
  }
}