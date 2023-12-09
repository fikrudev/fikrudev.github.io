//declaring global variables
var positionX=0;
var positionY=0;
var velocity=60;
var reverse = false;
var $ = function(id){return document.getElementById(id);};
var mball = $("moveball");
var mball2= $('moveball2');
//creating fucntion called by timer. When timer calls, this code updates x an y coordiante values for the ball:
function simulate(){
  positionX = positionX +velocity;
  positionY = positionY +velocity;
  if(positionX>300 && positionY>300){
        reverse=true;
        positionX=0;
        positionY=0;
      }
  if(reverse){
     positionX = positionX +velocity;
     positionY = positionY +velocity;
     }
    //ball one
    mball.style.top=positionY +'px';
    mball.style.left = positionX +'px';
    //ball two
    //mball2.style.left = positionX +50 +'px';
    return mball;
  }
//setInterval(simulate,2000);
//$('moveball').innerHTML=mball.nodeValue;
//$('moveball').innerHTML=mball2.nodeValue;