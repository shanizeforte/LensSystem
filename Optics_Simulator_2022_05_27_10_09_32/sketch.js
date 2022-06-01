let optical;
let dt = 1;
let accu = dt/2;


function setup() {
  cnv = createCanvas(900, 400);
  background(220);
  
  optical = new Optical();
  optical.setup(cnv);
  
  optical.addOpt(new Lens(10, 200))
  optical.addOpt(new Lens(20, -100))
  optical.addOpt(new Lens(30, 200))
  
  let n = 10
  
  for (let i=0; i<n; i++){
    //optical.addRay(new Ray(-width/2,30+ 150*(1/2-i/(n-1)), PI/24))
    optical.addRay(new Ray(-width/2, 150*(1/2-i/(n-1)),PI/32))
  }

}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  scale(1, -1);

  // Draw optical axe
  stroke(0, 0, 0);
  strokeWeight(1);
  line(-width / 2, 0, width / 2, 0);

  // Draw ray
  optical.drawPath();
  optical.drawOpts();
  //optical.drawRays();
  //optical.update(Math.round(2/dt));
  optical.drawOptPoints();

  
  
  for (let i=0; i<optical.rays.length; i++){

   // optical.rays[i].angleTan = 0.1-frameCount/400;
  }
}

