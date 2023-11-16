let compteur = 0;
let xPos = 0;
let yPos = 0;
let buttonEncre;
let buttonCouleurBlanc;
let buttonCouleurNoir;
let buttonCouleurRouge;
let couleurBlanc = [242, 239, 234];
let couleurOrange = [255, 103, 0];
let couleurNoir = [2, 2, 2];
let couleurBleu = [102,153,204];
let couleur = "255,255,255"
let grosseur = 0;
function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0, 0, 0);
  stroke(255, 255, 255);
  rect(0, 0, 105, 210);
  rect(34, 28, 32, 104);
  buttonEncre = createButton("Ajouter de <br> l'encre");
  buttonEncre.position(17, 150);
  buttonEncre.mousePressed(changeBG);
  buttonCouleurBlanc = createButton('Blanc');
  buttonCouleurOrange = createButton('Orange');
  buttonCouleurNoir = createButton('Noir');
  buttonCouleurBleu = createButton('Bleu');
  buttonCouleurBlanc.position(125, 35);
  buttonCouleurBleu.position(125, 190);
  buttonCouleurOrange.position(125, 85);
  buttonCouleurNoir.position(125, 135);
  buttonCouleurBlanc.mousePressed( function(){

    couleurChoisieFunction( couleurBlanc );
  
  } );

  buttonCouleurOrange.mousePressed(function(){

    couleurChoisieFunction( couleurOrange );
  
  } );
  buttonCouleurNoir.mousePressed(function(){

    couleurChoisieFunction( couleurNoir );
  
  } );
  buttonCouleurBleu.mousePressed(function(){

    couleurChoisieFunction( couleurBleu );
  
  } )
  buttonCouleurBlanc.class('blanc');
  buttonCouleurNoir.class('noir');
  buttonCouleurOrange.class('orange');
  buttonCouleurBleu.class('bleu')

  slider = createSlider(0, 255, 100);
  slider.position(200, 35);

}
let couleurChoisie = [2, 2, 2];
function couleurChoisieFunction(couleurArray) {

 for (i = 0; i<couleurChoisie.length; i++){
  couleurChoisie[i] = couleurArray[i];

 }
  fill(couleurChoisie);
  rect(35, 30, 30, 100);
  fill(255, 255, 255)
  rect(35, 30, 30, compteur);
  
}
function changeBG() {
  rect(35, 30, 30, 100);
  compteur = 0;
}
function convertRange( value, r1, r2 ) { 
  return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
}

draw = function () {
  grosseur = convertRange(slider.value(),[1,100],[15,20]);
  xPos = mouseX;
  yPos = mouseY;
  fill(couleurChoisie);

  if (mouseIsPressed && compteur < 100 && (yPos>230 ||xPos>350)) {

    rect(xPos, yPos, grosseur, grosseur)
    rect(35, 30, 30, 100);
    fill(255, 255, 255)
    compteur += 0.05*grosseur;
  //Barre d'encre
    stroke(255, 255, 255, 0)
    rect(35, 30, 30, compteur);


  }

}