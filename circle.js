<script src="../p5.min.js"></script>

function setup() {
  //초기화, 한번만
  createCanvas(windowWidth, windowWidth);
    //폭, 높이
 background("darkblue");
}

function draw(){
  //circle(random(400), random(400), random(100))  
  circle(mouseX, mouseY, random(100))
}
