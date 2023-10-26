let compteur=0;
let xPos=400;
let yPos=400;


let buttonEncre;
let buttonCouleurBlanc;
let buttonCouleurNoir;
let buttonCouleurRouge;
let couleur = "255,255,255"
function setup() {
  createCanvas(1920, 1080);
  background(255);
  fill(0,0,0);
  stroke(255,255,255);
  rect(0,0,105,210);
  rect(34,28,32,104);
  buttonEncre = createButton("Ajouter de <br> l'encre");
  buttonEncre.position(17, 150);
  buttonEncre.mousePressed(changeBG);
buttonCouleurBlanc= createButton('Blanc')
  buttonCouleurRouge= createButton('Rouge')
buttonCouleurNoir = createButton('Noir')
 buttonCouleurBlanc.position(125,35);

  buttonCouleurRouge.position(125,85);
buttonCouleurNoir.position(125,135);
  buttonCouleurBlanc.mousePressed(couleurBlanc);
  buttonCouleurRouge.mousePressed(couleurRouge);
  buttonCouleurNoir.mousePressed(couleurNoir);
  buttonCouleurBlanc.class('blanc')
  buttonCouleurNoir.class('noir')
  buttonCouleurRouge.class('rouge')


}
let couleurChoisie = [0,0,0];
function couleurRouge(){
  couleurChoisie =  [255,0,0];
}
function couleurBlanc(){
  couleurChoisie =  [255,255,255];
}
function couleurNoir(){
  couleurChoisie =  [0,0,0];
}
function changeBG() {

  compteur = 0;
}

draw = function() {
  xPos=mouseX;
  yPos=mouseY;
  if (mouseIsPressed && compteur<100){
        stroke(0,0,0,0)

    fill(couleurChoisie);
    rect(xPos,yPos,20,30)
    rect(35,30,30,100);
    fill(255,255,255)
    compteur +=1;
        stroke(255,255,255,0)

     rect(35,30,30,compteur);


  }

}