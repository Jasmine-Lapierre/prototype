let compteur=0;
let xPos=400;
let yPos=400;


let button;
function setup() {
  createCanvas(1000, 1000);
  background(255);
  fill(0,0,0)
    stroke(255,255,255)
  rect(0,0,105,140)

  rect(34,28,32,104)
  button = createButton('Ajouter Encre');
  button.position(3, 0);
  button.mousePressed(changeBG);
}

function changeBG() {

  compteur = 0;
}

draw = function() {
  xPos=mouseX;
  yPos=mouseY;
  if (mouseIsPressed && compteur<100){
        stroke(0,0,0)

    fill(0, 0, 0);
    rect(xPos,yPos,20,30)
    rect(35,30,30,100);
    fill(255,255,255)
    compteur +=1;
        stroke(255,255,255)

     rect(35,30,30,compteur);


  }

}