
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";



////////////////////////////// 1 /////////////////
function splash()  {


var  splashbtn;

var btnflag;
// scene1.setup
    this.setup = function() {
      console.log("We are at setup for scene1");

      splashbtn = new Clickable();     //Create button
      splashbtn.locate(width/2-110, height/2+150);

      splashbtn.strokeWeight = 2;        //Stroke width of the clickable (float)
      splashbtn.stroke = "#508ab5";
      splashbtn.textColor = "#FFFFFF";   //Color of the text (hex number as a string)
      splashbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
      splashbtn.text = "START";
      splashbtn.resize(200,50); 
    

      splashbtn.onOutside = function() {
          splashbtn.color = "#71add9"; 
      }    

      splashbtn.onHover = function(){ 
          splashbtn.color = "#5b93ba";     
      }

     splashbtn.onRelease = function(){
        console.log("I have been released!");
          splashbtn.color = "#71add9";      
          mgr.showScene(main);

            btnflag = 0;


    }



  }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {


      btnflag = 1;
      bloop.play();
    }


    this.draw = function()
    {
        background(wbg);
    fill(30);
    rect(0,0,windowWidth, 60);
    rect(0,windowHeight-60,windowWidth, 60);
        fill(200,0,0);


      if (btnflag) {
        splashbtn.draw(); // <- Draw the 'myButton' Clickable

      }
    push();
    imageMode(CENTER);
    image(spsh,width/2,height/2-10,800,300);
    pop();

    }


}

////////////////////////////// HELP /////////////////
function help()  {
var back;
  this.setup = function() {
  back = new Clickable();
  back.locate(width-width/2-100, height-55);
  back.textColor = "#2b2b2b";   //Color of the text (hex number as a string)
  back.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  back.text = "GO BACK";
  back.resize(200,45);
      
  back.onOutside = function () {
  back.color = "#71add9"; 
  }
      
  back.onHover = function () {
    back.color = "#5b93ba";
  }

  back.onRelease = function () {
      mgr.showScene(main);  
  }
        background(wbg);

  }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {

      bloop.play();
    }


    this.draw = function(){
    push()
    translate (0,40)
    textSize(45);
    fill(255);
    textAlign(CENTER);
    text('How To Play',width/2,height/4);
    textSize(30);
    text('Use the buttons at the bottom of the screen to take care of your fish', width/2,height/4+40);
    text('DANCE makes your fish spin. Be careful, they may get dizzy!', width/2,height/4+80);
    text('FEED lets you feed your little friend. Move your mouse to the position of the food.', width/2,height/4+120);
    text('CLEAN gets rid of the algale buildup on the tank', width/2,height/4+160);
    text('Your fish may get stuck at the top, just reload the page to help them out.', width/2,height/4+240);
    pop()
        
    fill(30);
    rect(0,0,windowWidth, 60);
    rect(0,windowHeight-60,windowWidth, 60);  
     
    back.draw();
    }


}

///////////////////////  MAIN  ////////////////////////

function main()  {

  var clnbtn;    
  var positionX;
  var xSpeed;
  var positionY;
  var ySpeed;


  this.setup = function() {
console.log("We are at setup for scene2");
      

    positionX = random(400);
	positionY = random(400);
    xSpeed = 2;
	ySpeed = 3;


  clnbtn = new Clickable();     //Create button
  clnbtn.locate(width-width/3, height-55);
  clnbtn.textColor = "#2b2b2b";   //Color of the text (hex number as a string)
  clnbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  clnbtn.text = "CLEAN";
  clnbtn.resize(120,45);
      
  clnbtn.onOutside = function() {
      clnbtn.color = "#fcee53"; 
  }
      
  clnbtn.onHover = function () {
      clnbtn.color = "#d6ca42";
  }

  clnbtn.onRelease = function(){
    console.log("I have been released!"); 
      btnflag = 0;
      mgr.showScene(clean);  


    }

  feedbtn = new Clickable();
  feedbtn.locate(width-width/2-60, height-55);
  feedbtn.textColor = "#2b2b2b";   //Color of the text (hex number as a string)
  feedbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  feedbtn.text = "FEED";
  feedbtn.resize(120,45);
      
  feedbtn.onOutside = function () {
  feedbtn.color = "#ab1b3a"; 
  }
      
  feedbtn.onHover = function () {
    feedbtn.color = "#8a132d";
  }

  feedbtn.onRelease = function () {
      mgr.showScene(feed); 

  }

  
  flpbtn = new Clickable();
  flpbtn.locate(width/3-120, height-55);
  flpbtn.textColor = "#2b2b2b";   //Color of the text (hex number as a string)
  flpbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  flpbtn.text = "DANCE";
  flpbtn.resize(150,45);
      
  flpbtn.onOutside = function () {
    flpbtn.color = "#8fc7cf"; 
  }
      
  flpbtn.onHover = function () {
    flpbtn.color = "#76a4ab";
  }

  flpbtn.onPress = function () {
    mgr.showScene(dance);
  }

  helpbtn = new Clickable();     //Create button
  helpbtn.locate(20, 5);

  helpbtn.strokeWeight = 2;        //Stroke width of the clickable (float)
  helpbtn.stroke = "#000";
  helpbtn.textColor = "#FFFFFF";   //Color of the text (hex number as a string)
  helpbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  helpbtn.text = "HELP";
  helpbtn.resize(120,50); 


  helpbtn.onOutside = function() {
      helpbtn.color = "#71add9"; 
  }    

  helpbtn.onHover = function(){ 
      helpbtn.color = "#5b93ba";     
  }

 helpbtn.onRelease = function(){   
      mgr.showScene(help);

}
  }

  this.enter = function()
  {

      bloop.play();

  }

    this.draw = function()
    {
    background(wbg);
    
//fish
    push();       
    scale(fsize);
// When the ball passes either side of the canvas, TURNAROUND
  if(positionX > width + fwidth || positionX < 0 ) { 
    xSpeed = xSpeed * -1; 
  }
    
  if(positionY > height-80 + fheight || positionY < 80) { 
    ySpeed = ySpeed * -1;
  }
      
        
 positionX = positionX + xSpeed;  
 positionY = positionY - ySpeed;
    
 animation(bdcolor,positionX,positionY);
 
//    ellipse(0,0,400,200);
    pop();
 
    dirty();
        
        
    fill(30);
    rect(0,0,windowWidth, 60);
    rect(0,windowHeight-60,windowWidth, 60);    
      screenText();
      flpbtn.draw();
      feedbtn.draw();
      clnbtn.draw();
      helpbtn.draw();
    }

}



function dirty() {
  falpha= (1 + frameCount/20);

  push();
  blendMode(MULTIPLY);
  squareColor = color(67, 125, 56,1+falpha);
  fill(squareColor);
  rect(0, 0, width, height);
  pop();
  
  console.log("frameCount");
  
}

///////////////////////  CLEAN  ////////////////////////
function clean()  {
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;
    

    hell = "bye";

  var clnbtn;
    
  var positionX;
  var xSpeed;
  var positionY;
  var ySpeed;


  this.setup = function() {
   positionX = random(400);
	positionY = random(400);
    xSpeed = 2;
	ySpeed = 3;


  clnbtn = new Clickable();     //Create button
  clnbtn.locate(width-width/3, height-55);
  clnbtn.textColor = "#2b2b2b";   //Color of the text (hex number as a string)
  clnbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  clnbtn.text = "CLEAN";
  clnbtn.resize(120,45);
  clnbtn.color = "#fcee53"; 
      
  clnbtn.onOutside = function() {
      clnbtn.color = "#fcee53"; 
  }
      
  clnbtn.onHover = function () {
      clnbtn.color = "#d6ca42";
  }    
      
  clnbtn.onRelease = function(){
    console.log("I have been released!"); 
      btnflag = 0;
      mgr.showScene(clean);  


    }

  feedbtn = new Clickable();
  feedbtn.locate(width-width/2-60, height-55);
  feedbtn.textColor = "#2b2b2b";   //Color of the text (hex number as a string)
  feedbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  feedbtn.text = "FEED";
  feedbtn.resize(120,45);
      
  feedbtn.onOutside = function () {
  feedbtn.color = "#ab1b3a"; 
  }
      
  feedbtn.onHover = function () {
    feedbtn.color = "#8a132d";
  }

  feedbtn.onRelease = function () {
      mgr.showScene(feed); 

  }

  
  flpbtn = new Clickable();
  flpbtn.locate(width/3-120, height-55);
  flpbtn.textColor = "#2b2b2b";   //Color of the text (hex number as a string)
  flpbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  flpbtn.text = "FLIP";
  flpbtn.resize(150,45);
        
  flpbtn.onOutside = function () {
    flpbtn.color = "#8fc7cf"; 
  }
  
  flpbtn.onHover = function () {
    flpbtn.color = "#76a4ab";
  }

  flpbtn.onPress = function () {
    mgr.showScene(dance);
  }
  helpbtn = new Clickable();     //Create button
  helpbtn.locate(20, 5);

  helpbtn.strokeWeight = 2;        //Stroke width of the clickable (float)
  helpbtn.stroke = "#000";
  helpbtn.textColor = "#FFFFFF";   //Color of the text (hex number as a string)
  helpbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  helpbtn.text = "HELP";
  helpbtn.resize(120,50); 


  helpbtn.onOutside = function() {
      helpbtn.color = "#71add9"; 
  }    

  helpbtn.onHover = function(){ 
      helpbtn.color = "#5b93ba";     
  }

 helpbtn.onRelease = function(){   
      mgr.showScene(help);

}

  }

  this.enter = function()
  {

      bloop.play();

  }

    this.draw = function()
    {
    background(wbg);
    
//fish
    push();       
    scale(fsize);
// When the ball passes either side of the canvas, TURNAROUND
  if(positionX > width + fwidth || positionX < 0 ) { 
    xSpeed = xSpeed * -1; 
  }
    
  if(positionY > height-80 + fheight || positionY < 80) { 
    ySpeed = ySpeed * -1;
  }
      
        
 positionX = positionX + xSpeed;  
 positionY = positionY - ySpeed;
    
 animation(bdcolor,positionX,positionY);
 
//    ellipse(0,0,400,200);
    pop();
       
    fill(30);
    rect(0,0,windowWidth, 60);
    rect(0,windowHeight-60,windowWidth, 60);    
      screenText();
      flpbtn.draw();
      feedbtn.draw();
      clnbtn.draw();
      helpbtn.draw();
    }

}

///////////////////////  FEED  ////////////////////////
var coins;
var player;
var score = 0;

function feed()  {

  var clnbtn;
  var spfeedbtn;

  let x = 1;
  let y = 1;
  let easing = 0.05;
    
  this.setup = function() {
  console.log("Feeding");

  spfeedbtn = new Clickable();
  spfeedbtn.locate(width-width/2-100, height-55);
  spfeedbtn.textColor = "#2b2b2b";   //Color of the text (hex number as a string)
  spfeedbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  spfeedbtn.text = "STOP FEED";
  spfeedbtn.resize(200,45);
      
  spfeedbtn.onOutside = function () {
  spfeedbtn.color = "#ab1b3a"; 
  }
      
  spfeedbtn.onHover = function () {
    spfeedbtn.color = "#8a132d";
  }

  spfeedbtn.onRelease = function () {
      mgr.showScene(main);  
  }
  
  coins = new Group();
  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      20, 20);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }
  player = createSprite(50, 50, 100, 100);
  player.shapeColor = color(255,0);

  }

  this.enter = function(){
      bloop.play();

  }

    this.draw = function() {
    background(wbg);
    
//fish
  push();
  let targetX = mouseX-150;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing
    if (mouseX < width/2){
        translate(300,0);
        animation (bdcolor1, x, y) 
    }
    else {
  animation(bdcolor,x,y);
    }
  pop();
        
//food
  player.velocity.x = (mouseX-player.position.x)*0.1;
  player.velocity.y = (mouseY-player.position.y)*0.1;
  player.overlap(coins, getCoin);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
      fill (255,0);
    text(score, width/2, height/2);
  }
  else {
      fill(255);
    text("I am full, thank you!", width/2, height/2);
  }     

 
    dirty();
        
        
    fill(30);
    rect(0,0,windowWidth, 60);
    rect(0,windowHeight-60,windowWidth, 60);  
    
    spfeedbtn.draw();

    }

function getCoin(player, coin) {
      coin.remove();
      score += 1;
    }
}

///////////////////////  DANCE  ////////////////////////

function dance()  {

  var clnbtn;
  var spflipbtn;
    
  this.setup = function() {
  console.log("Dance Party");

  spflipbtn = new Clickable();
  spflipbtn.locate(width-width/2-120, height-55);
  spflipbtn.textColor = "#2b2b2b";   //Color of the text (hex number as a string)
  spflipbtn.textSize = 30;           //Size of the text (integer)    //Border color of the clickable (hex number as a string)
  spflipbtn.text = "STOP DANCING";
  spflipbtn.resize(240,45);
      
  spflipbtn.onOutside = function () {
    spflipbtn.color = "#8fc7cf"; 
  }
      
  spflipbtn.onHover = function () {
    spflipbtn.color = "#76a4ab";
  }

  spflipbtn.onRelease = function () {
      mgr.showScene(main);  
    }
  
  }

this.enter = function(){
      bloop.play();

  }

this.draw = function() {
    background(wbg);
    
    if (frameCount > 800){
    textSize (40);
    text("I am getting dizzy", width/2-170,height/2);
    }
//fish
  push();
  translate(width/2,height/2);
  rotate(-frameCount/30)
  animation(bdcolor,100,100);
  pop();
        
        
    fill(30);
    rect(0,0,windowWidth, 60);
    rect(0,windowHeight-60,windowWidth, 60);  
        

    spflipbtn.draw();

    }

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}