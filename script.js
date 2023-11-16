let compteur = 0;
let xPos = 0;
let yPos = 0;
let buttonEncre;
let buttonCouleurBlanc;
let buttonCouleurNoir;
let buttonCouleurRouge;
let buttonCouleurVert;
let buttonPinceau;
let buttonLigne;
let modeLigne = false;
let couleurBlanc = [242, 239, 234];
let couleurOrange = [255, 103, 0];
let couleurNoir = [2, 2, 2];
let couleurBleu = [102,153,204];
let couleurVert = [22,219,101];

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
  buttonCouleurVert = createButton('Vert');
  buttonPinceau = createButton('Pinceau');

  buttonCouleurBlanc.position(125, 35);
  buttonCouleurOrange.position(125, 85);
  buttonCouleurNoir.position(125, 135);
  buttonCouleurBleu.position(125, 190);
  buttonCouleurVert.position(125, 240);
  buttonPinceau.position(200, 240);


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
  buttonCouleurVert.mousePressed(function(){

    couleurChoisieFunction( couleurVert );
  
  } )
  buttonPinceau.mousePressed(function(){

    if(modeLigne){
      modeLigne = !modeLigne;
    }  else if(!modeLigne){
      modeLigne = !modeLigne;
    }
  
  } )
  buttonCouleurBlanc.class('blanc');
  buttonCouleurNoir.class('noir');
  buttonCouleurOrange.class('orange');
  buttonCouleurBleu.class('bleu')
  buttonCouleurVert.class('vert')

  slider = createSlider(0, 255, 100);
  slider.position(200, 35);

}
let couleurChoisie = [2, 2, 2];
function couleurChoisieFunction(couleurArray) {

 for (i = 0; i<couleurChoisie.length; i++){
  couleurChoisie[i] = couleurArray[i];

 }
  fill(couleurChoisie);
  stroke(0,0,0);
  strokeWeight(1);

  rect(35, 30, 30, 100);
  fill(255, 255, 255)
  rect(35, 30, 30, compteur);
  
}
function changeBG() {
  fill(couleurChoisie);
  stroke(0,0,0);
  strokeWeight(1);
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
  stroke(couleurChoisie);

  if (mouseIsPressed && compteur < 100 && (yPos>230 ||xPos>350)) {
    if(modeLigne){
      strokeWeight(grosseur); 
            line(mouseX, mouseY, pmouseX, pmouseY);     
     if(pmouseX ==mouseX && pmouseY ==mouseY){

      strokeWeight(1); 

      stroke(255, 255, 255, 1)
  
      rect(35, 30, 30, 100);
      fill(255, 255, 255)
        stroke(255, 255, 255, 0)
        rect(35, 30, 30, compteur);
      return;
     }       
     else{
      compteur += 0.05*grosseur;

    }
    //Barre d'encre

    strokeWeight(1); 

    stroke(255, 255, 255, 1)

    rect(35, 30, 30, 100);
    fill(255, 255, 255)
      stroke(255, 255, 255, 0)
      rect(35, 30, 30, compteur);
  //Barre d'encre

       return;
    }
    else{
    rect(xPos, yPos, grosseur, grosseur)
    rect(35, 30, 30, 100);
    fill(255, 255, 255)
    }
    if(pmouseX ==mouseX && pmouseY ==mouseY){
      stroke(255, 255, 255, 0)
      rect(35, 30, 30, compteur);
      return;
     }       
     else{
      compteur += 0.05*grosseur;

    }  //Barre d'encre
    stroke(255, 255, 255, 0)
    rect(35, 30, 30, compteur);



  }

}