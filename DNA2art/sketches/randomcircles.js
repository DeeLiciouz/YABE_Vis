var circs = [];
var numCircs = 1200;
function setup() {
  console.log(random(0,14))
  createCanvas(1920,1080);

  for(i=0;i<numCircs;i++){
    c = new CircObj(SizeByData(random(20,200) ,str[Math.floor(random(0,str.length -1))]), i ) // generate a random sized circObj and store its ID for later
    circs.push(c); //add it to the array.
  }
}

function draw(){
  background(0);
  circs.forEach((circ) => circ.display());
}

function SizeByData(base, data) {
  // 30
  // const base = 100;

  return base / ((data.x + data.y) / 2);
}

function CircObj(d, id){
  this.x = random(width)
  this.y = random(height)
  this.d = d
  this.id = id;
  this.color = color(random(255),random(255),random(255));
  this.hit = true;

  this.display = function(){
    noStroke();
    fill(this.color);
    rotate(PI / 3);
    rect(this.x, this.y, this.d, this.d);
    ellipse(this.x,this.y,this.d,this.d);
  }
}
