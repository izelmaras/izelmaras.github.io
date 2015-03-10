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
PFont font;
int nb=100;
 
void setup(){
    size(document.body.offsetWidth, document.body.offsetHeight);
    ctx = externals.context;
    ellipseMode(CORNER);
    smooth();
    
}
 
void draw(){
    background(255);
    fill(0);
    font = loadFont("helvetica.ttf"); 
    textFont(font, 90);
    text("Which one do you pick",0, 0); 
    
}

void keyPressed(){
    save("izel-######.png");
}
