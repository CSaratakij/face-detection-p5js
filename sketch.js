var ctracker;
var positions = [];
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(0,0);

    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.position(0,0);
    capture.hide();

    ctracker = new clm.tracker();
    ctracker.init();
    ctracker.start(capture.elt);
    noStroke();
}

function draw(){
    background(255);
     positions = ctracker.getCurrentPosition();
     image(capture, 0, 0, 640, 480);//, , 240);

     if(positions){
         fill(255)
         ellipse(positions[27][0],positions[27][1],50,50);
         ellipse(positions[32][0],positions[32][1],50,50);

         fill(0)
         ellipse(positions[27][0],positions[27][1],10,10);
         ellipse(positions[32][0],positions[32][1],10,10);


         fill(255,0,0);
         ellipse(positions[62][0],positions[62][1],50,50);
     }
}
