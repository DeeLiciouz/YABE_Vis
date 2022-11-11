const lines = [];
const connections = [];

function setup() {
  createCanvas(1920, 1080);

  // const lines = [];
  str.forEach((el, i, arr) => {
    lines.push(createPointsForLine(0, 540, 1900));
  });
  createConnections(lines);
  noLoop();

  const data = str[Math.floor(random(0, str.length - 1))];
  const size = 30 + getAverage(data.x, data.y);
  const c = color(255, 100, 50)

  const [r, g, b] = c.levels;
  // if (!(a === b)) <<<---- equals strict // Type restricted


  console.log(r,g,b);
  console.log(c);
  console.log(data);
}

function draw() {
  background(255);
  noFill();
  strokeWeight(10);
  strokeJoin(ROUND);
  /* DRAW LINES */
  lines.forEach((thing) => {
    thing.forEach(([x,y], i, arr) => {
      beginShape();
      const red = color(255,0,0);
      const blue = color(0,0,255);
      const step = map(i, 0, (arr.length - 1), 0, 1);

      let c = lerpColor(red, blue, step);
      stroke(c);
      vertex(x,y);
      if(i < arr.length - 1) vertex(arr[i+1][0], arr[i+1][1]);
      endShape();
    });

  });
  connections.forEach(([x,y], i, arr) => {
    beginShape();
    const red = color(255,0,0);
    const blue = color(0,0,255);
    const step = map(i, 0, (arr.length - 1), 0, 1);

    let c = lerpColor(red, blue, step);
    stroke(c);
    vertex(x,y);
    endShape();
  })
  /* NOT REALLY NECESSARY */
  // filter(BLUR, 3);

}

function getAverage(x,y) {
  return (x + y) / 2;
}

function createPointsForLine(x, y, amount, vert) {
  let tx = vert ? x + Math.floor(Math.random() * -30 + Math.random() * 30) : 0;
  let ty = vert ? 0 : y + Math.floor(Math.random() * -400 + Math.random() * 400);
  let a = 0;

  const points = [];
  for (let i = 0; i < amount; i++) {
    tx +=  vert ? Math.sin(a) * 1.2 : Math.cos(a) * 2;
    ty += vert ? Math.cos(a) * 2 :Math.sin(a) * 1.2;
    a += (Math.random() - Math.random()) * 0.1;
    points.push([tx,ty]);
  }
  return points;
}

function createConnections(lines) {
  lines.forEach((line, i) => {
    for (let j = 0; j < lines.length; j++) {
      if (j !== i) {
        const refLine = i === lines.length - 1 ? lines[0] : lines[j];
        for (let k = 0; k < line.length; k++) {
          const p0 = line[i];
          const p1 = line[j];
          const dx = p1[0] - p0[0];
          const dy = p1[1] - p0[1];
          if (Math.sqrt((dx * dx) + (dy * dy)) < 900 && Math.random() > 0.9) {
            connections.push(p0[0], p0[1]);
            connections.push(p1[0], p1[1]);
          }
        }
      }
    }
  });
}

function inverseColor(c) {
  const r = 255 - c.levels[0];
  const g = 255 - c.levels[1];
  const b = 255 - c.levels[2];

  return color(r, g, b);
}
