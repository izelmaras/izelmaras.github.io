var video = document.createElement("video");
video.setAttribute("style", "display:none;");
video.setAttribute("id", "videoOutput");
video.setAttribute("width", "500px");
video.setAttribute("height", "660px");
video.setAttribute("autoplay", "true");
if(document.body!=null) document.body.appendChild(video);
 
function init() {
  
}
 
var ctx;
PImage img;
int nb=100;
 
void setup(){
    size(document.body.offsetWidth-20, document.body.offsetHeight-20);
    ctx = externals.context;
    ellipseMode(CORNER);
    smooth();
    
}
 
void draw(){
    background(0);
 //   rect(20, 20, 50, 100);
    
}

void keyPressed(){
    save("izel-######.png");
}
