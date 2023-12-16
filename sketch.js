let width = 400, height = 400;
let stars=[];
let factor = 100;
let speedSlider;

function setup() {
  createCanvas(width, height);
  speedSlider = createSlider(0,20,5);
  for(let i =0;i<50;i++){
    stars[i] = createVector(random(-width*factor , width*factor), random(-height*factor , height*factor), random(10,400)); //(xyz) 가짐, 속도로 활용
  }
}

function draw() {
  background(0,25);
  fill(255);

  translate(width/2, height/2);
  for(let star of stars){
    let x = star.x/star.z;
    let y = star.y/star.z;
  
    let d = map(star.z, 0, 400, 10, 1);
    textSize(d*5);
    text("*", x,y);
    //circle(x, y, d);

    star.z -= speedSlider.value();
    if(star.z<1){
      star.x = random(-width*factor , width*factor);
      star.y = random(-height*factor , height*factor);
      star.z = 400;
    }


  }
}
