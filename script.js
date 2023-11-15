let compteur=0;
let xPos=400;
let yPos=400;


let buttonEncre;
let buttonCouleurBlanc;
let buttonCouleurNoir;
let buttonCouleurRouge;
let couleur = "255,255,255"
function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0,0,0);
  stroke(255,255,255);
  rect(0,0,105,210);
  rect(34,28,32,104);
  buttonEncre = createButton("Ajouter de <br> l'encre");
  buttonEncre.position(17, 150);
  buttonEncre.mousePressed(changeBG);
buttonCouleurBlanc= createButton('Blanc');
  buttonCouleurOrange= createButton('Orange');
buttonCouleurNoir = createButton('Noir');
buttonCouleurBleu = createButton('Bleu');

 buttonCouleurBlanc.position(125,35);
 buttonCouleurBleu.position(125,190);
 buttonCouleurOrange.position(125,85);
buttonCouleurNoir.position(125,135);
  buttonCouleurBlanc.mousePressed(couleurBlanc);
  buttonCouleurOrange.mousePressed(couleurOrange);
  buttonCouleurNoir.mousePressed(couleurNoir);
  buttonCouleurBleu.mousePressed(couleurBleu)
  buttonCouleurBlanc.class('blanc');
  buttonCouleurNoir.class('noir');
  buttonCouleurOrange.class('orange');
  buttonCouleurBleu.class('bleu')

}
let couleurChoisie = [0,0,0];
function couleurOrange(){
  couleurChoisie =  [255,103,0];
}
function couleurBlanc(){
  couleurChoisie =  [242,239,234];
}
function couleurNoir(){
  couleurChoisie =  [2,2,2];
}
function couleurBleu(){
  couleurChoisie = [102,153,204]
}
function changeBG() {

  compteur = 0;
}

draw = function() {
  xPos=mouseX;
  yPos=mouseY;

        stroke(0,0,0,0)

    fill(couleurChoisie);
    if (mouseIsPressed && compteur<100){

  rect(xPos,yPos,20,30)

    for(let i = 0; i < touches.length; i++) {
      if(compteur<100){
        fill(couleurChoisie);
        rect(touches[i].x ,touches[i].y, 20, 30);
        compteur +=1;
        console.log(compteur);
      }

    }
    rect(35,30,30,100);
    fill(255,255,255)
    compteur +=1;
        stroke(255,255,255,0)

     rect(35,30,30,compteur);


  }

}