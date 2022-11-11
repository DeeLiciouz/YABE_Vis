var circs = [];
var numCircs = 900;
function setup() {
  createCanvas(1920,1080);

  for(i=0;i<numCircs;i++){
    c = new circObj(random(30,60), i ) // generate a random sized circObj and store it's ID for later
    circs.push(c); //add it to the array.
  }
}

function draw(){
  background(0);
  circs.forEach((circ) => circ.disp());
}

function circObj(d, id){
  this.x = random(width)
  this.y = random(height)
  this.d = d
  this.id = id;
  this.color = color(random(255),random(255),random(255));
  this.hit = true;

  this.disp = function(){
    noStroke();
    fill(this.color);
    ellipse(this.x,this.y,this.d,this.d);
  }
}
