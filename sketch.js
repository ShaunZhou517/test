let img, x, y, w, h, bp;
let imax, imin;
let n = 600;
let m = 600;
let r = 600;
let x1, y1, w1, h1;
let button1;

//have an array about all pictures
let pictures;
let originals;
let backGroundpics;

function preload() {
  img1 = loadImage("images/image1.png");
  img2 = loadImage("images/image2.png");
  img3 = loadImage("images/image3.png");
  img4 = loadImage("images/image4.png");
  img5 = loadImage("images/image5.png");
  // img6 = loadImage("images/image6.png");
  // img7 = loadImage("images/image7.png");
  // img8 = loadImage("images/image8.png");
  bp1 = loadImage("images/background1.png");
  bp2 = loadImage("images/background2.png");
  bp3 = loadImage("images/background3.png");
  bp4 = loadImage("images/background4.png");
  bp5 = loadImage("images/background5.png");
  bp6 = loadImage("images/background6.png");
  bp7 = loadImage("images/background7.png");
  bp8 = loadImage("images/background8.png");
  bp9 = loadImage("images/background9.png");
  bp10 = loadImage("images/background10.png");
}

function setup() {
  createCanvas(n, m);
  button = createButton("Click me!");
  button.mousePressed(randomPicture);
  field = createInput("type something here");

  imax = width;
  imin = 10;

  imageMode(CENTER);

  //an object literal would be a good way to wrap up some of the information about each of loaded images

  var scale = 6;

  let p1 = {
    img: img1,
    w: img1.width / scale,
    h: img1.height / scale,
    x: random(n),
    y: random(m),
    imin: 50,
    imax: width,
    ratio: float(img1.height) / img1.width,
  };

  let p2 = {
    img: img2,
    w: img2.width / scale,
    h: img2.height / scale,
    x: random(n),
    y: random(m),
    imin: 50,
    imax: width,
    ratio: float(img2.height) / img2.width,
  };

  let p3 = {
    img: img3,
    w: img3.width / scale,
    h: img3.height / scale,
    x: random(n),
    y: random(m),
    imin: 50,
    imax: width,
    ratio: float(img3.height) / img3.width,
  };

  let p4 = {
    img: img4,
    w: img4.width / scale,
    h: img4.height / scale,
    x: random(n),
    y: random(m),
    imin: 50,
    imax: width,
    ratio: float(img4.height) / img4.width,
  };
  let p5 = {
    img: img5,
    w: img3.width / scale,
    h: img3.height / scale,
    x: random(n),
    y: random(m),
    imin: 50,
    imax: width,
    ratio: float(img5.height) / img5.width,
  };
//background pictures are here
  let bpic1 = {
    img: bp1,
    x1: r / 2,
    y1: r / 2,
    w1: r,
    h1: r,
  };
  let bpic2 = {
    img: bp2,
    x1: r / 2,
    y1: r / 2,
    w1: r,
    h1: r,
  };
    let bpic3 = {
    img: bp3,
    x1: r / 2,
    y1: r / 2,
    w1: r,
    h1: r,
  };
    let bpic4 = {
    img: bp4,
    x1: r / 2,
    y1: r / 2,
    w1: r,
    h1: r,
  };
  let bpic5 = {
    img: bp5,
    x1: r / 2,
    y1: r / 2,
    w1: r,
    h1: r,
  };
  let bpic6 = {
    img: bp6,
    x1: r / 2,
    y1: r / 2,
    w1: r,
    h1: r,
  };
    let bpic7 = {
    img: bp7,
    x1: r / 2,
    y1: r / 2,
    w1: r,
    h1: r,
  };
    let bpic8 = {
    img: bp8,
    x1: r / 2,
    y1: r / 2,
    w1: r,
    h1: r,
  };
  let bpic9 = {
    img: bp9,
    x1: r / 2,
    y1: r / 2,
    w1: r,
    h1: r,
  };
    let bpic10 = {
    img: bp10,
    x1: r / 2,
    y1: r / 2,
    w1: r,
    h1: r,
  };

  //keep all object literal information in an array for accessing later (to check if the mouse is in any of them)
  pictures = [p1, p2, p3, p4, p5];
  originals = [img1, img2, img3, img4, img5];
  backGroundpics = [bpic1, bpic2,bpic3,bpic4,bpic5,bpic6,bpic7,bpic8,bpic9,bpic10];

  //use loops and object literals to draw everything
  for (var i = 0; i < pictures.length; i++) {
    pictures[i].img.resize(pictures[i].w, pictures[i].h);
    image(pictures[i].img, pictures[i].x, pictures[i].y);
  }
}
function draw() {
  fill(255);
  noStroke();
  textSize(20);
  text(field.value(), 15, 15, width - 20, height - 20);
}
//check if the mouse is positioned inside any of the pictures
function checkInside() {
  for (var i = 0; i < pictures.length; i++) {
    if (dist(mouseX, mouseY, pictures[i].x, pictures[i].y) < pictures[i].w / 2)
      return i;
  }
  return -1;
}

function mouseDragged(event) {
  console.log("mouse dragged");
  var i = checkInside();
  if (i > -1) {
    pictures[i].x = mouseX;
    pictures[i].y = mouseY;
    drawImages(pictures); 
    // randomPicture(backGroundpics);
  }
}

function mouseWheel(event) {
  console.log("width: " + w + " height: " + h);

  var i = checkInside();
  console.log(i);

  //if mouse is "inside" one of the pictures, scale it up/down with mouse movement
  if (i > -1) {
    var old_w, old_h, p;
    p = pictures[i];
    //don't want to increment if not in an image
    if (p.w + event.delta < p.imax && p.w + event.delta > p.imin) {
      old_w = p.w;
      old_h = p.h;
      p.w += event.delta;
      p.h += (event.delta * old_h) / old_w;
      p.img = originals[i].get(); //copy over the original image and resize since you lose resolution over resize operations
      // console.log(i);
      console.log("ratio: " + p.ratio + " " + p.h);
      p.img.resize(p.w, 0); //reference says you can use 0 to scale proportionately

      drawImages(pictures);
  
    }
  }
  //move drawing into a separate function since we need to call it from different places
}

function drawImages() {
  background(255,1);
  for (i = 0; i < pictures.length; i++) {
    image(pictures[i].img, pictures[i].x, pictures[i].y);
  }
}

function randomPicture() {
  let n = random(backGroundpics);
  image(n.img, n.x1, n.y1, n.w1, n.h1);
}
