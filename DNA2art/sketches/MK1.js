let counter;
let circles = [];

function setup (){
    counter = 0;
    circles = [];
    frameRate(60);
    createCanvas(1920, 1080);

    let colors = [color(0, 128, 96), color(96, 0, 128), color(128, 96, 0)];
    //let colors = [color(0), color(96, 0, 128), color(0)];
    //let colors = [color(0, 128, 96), color(96, 0, 128), color(0)];

    for(let posX = 0; posX < 100; posX++) {
        for(let posY = 0; posY < 45; posY++) {
            const data = str[Math.floor(random(0,str.length - 1))];
            const size = 30 + getAverage(data.x, data.y);
            const rColor = random(colors)
            circles.push({
                x: posX * 25,
                y: posY * 25,
                color: rColor,
                size,
            });
            //const [r, g, b] = rColor.levels;
            //fill(rColor);
            //if (!(r === 0 && g=== 0 && b=== 0)) stroke(inverseColor(rColor));
            //else stroke(rColor);
            //circle(posX * 25, posY * 25, size);
            //filter(BLUR, 3);
        }
    }
}

function getAverage(x, y){
    return (x + y) / 2;
}

function inverseColor(keck){
    const r = 255 - keck.levels[0];
    const g = 255 - keck.levels[1];
    const b = 255 - keck.levels[2];

    return color(r, g, b);
}

function draw(){
    background(0);
    strokeWeight(0);
    if (counter < circles.length - 1) {
        const curr = circles[counter];

        fill(curr.color);
        circle(curr.x, curr.y, curr.size);
        counter++
    }
    else noLoop();

/*     for(let posX = 0; posX < 1920; posX++) {
        for(let posY = 0; posY < 1080; posY++) {
            const data = str[Math.floor(random(0,str.length - 1))];
            const size = 30 + getAverage(data.x, data.y);
            const rColor = random(colors)
            const [r, g, b] = rColor.levels;
            fill(rColor);
            if (!(r === 0 && g=== 0 && b=== 0)) stroke(inverseColor(rColor));
            else stroke(rColor);
            circle (posX * 25, posY * 25, size);
            //filter(BLUR, 3);
        }
    } */
}
