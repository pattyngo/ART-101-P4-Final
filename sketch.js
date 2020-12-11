
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/

var sel;
var bdcolor;
var bdcolor1;
var slider;


var image1_up, image2_over,snd1,snd2;
var wbg;


function preload() {

   bloop = loadSound("sound/bloop.wav");
   bubble = loadSound("sound/bubble.wav");
   wbg = loadImage("assets/wbg.png");
   spsh = loadImage("assets/splash.png");
   orange = loadAnimation("fish/orangegoldfish1.png","fish/orangegoldfish2.png","fish/orangegoldfish3.png","fish/orangegoldfish4.png");
   orange1 = loadAnimation("fish/orangegoldfish1.1.png","fish/orangegoldfish2.1.png","fish/orangegoldfish3.1.png","fish/orangegoldfish4.1.png");
   pink = loadAnimation("fish/pink1.png","fish/pink2.png","fish/pink1.png","fish/pink4.png");
   pink1 = loadAnimation("fish/pink1.1.png","fish/pink2.1.png","fish/pink1.1.png","fish/pink4.1.png");
   green = loadAnimation("fish/green1.png","fish/green2.png","fish/green1.png","fish/green4.png");
   green1 = loadAnimation("fish/green1.1.png","fish/green2.1.png","fish/green1.1.png","fish/green4.1.png");
   black = loadAnimation("fish/blk1.png","fish/blk2.png","fish/blk1.png","fish/blk4.png");
   black1 = loadAnimation("fish/blk1.1.png","fish/blk2.1.png","fish/blk1.1.png","fish/blk4.1.png");
   purple = loadAnimation("fish/purp1.png","fish/purp2.png","fish/purp1.png","fish/purp4.png");
   purple1 = loadAnimation("fish/purp1.1.png","fish/purp2.1.png","fish/purp1.1.png","fish/purp4.1.png");

}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;

function setup() {
    
    createCanvas(windowWidth, windowHeight);
  //  console.log(hell);
     mgr = new SceneManager();

  masterVolume(.25);
  background(wbg);
    
  sel = createSelect();
  sel.position(width-400,30);
  sel.option('Orange');
  sel.option('Green');
  sel.option('Purple');
  sel.option('Pink');
  sel.option('Black');
  sel.changed(bodyclr);
      
  scl =  createSelect();
  scl.position(width-220,30);
  scl.option('Default');
  scl.option('smol');
  scl.option('BIG');
  scl.changed(fshsize);
    

  bdcolor = orange;  
  bdcolor1 = orange1;
  fsize = 1;
  fwidth = 0;
  fheight = 0;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (splash);
    mgr.addScene (help);
    mgr.addScene (main);
    mgr.addScene (clean);
    mgr.addScene (feed);
    mgr.addScene (dance);
    mgr.showNextScene();


}

function draw(){

    // passthe current draw function into the SceneManager
    mgr.draw();
}

//function mousePressed()
//{
//   // pass the mousePressed message into the SceneManager
//  mgr.mousePressed();
//}

function keyPressed(){
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( clean );
            break;
        case '4':
            mgr.showScene( feed );
            break;
        case '5':
            mgr.showScene( dance );
            break;
        case '6':
            mgr.showScene( help );
            break;

    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}

function bodyclr() {
  let val = sel.value();
    if(val == 'Orange'){
    bdcolor = orange;
    bdcolor1 = orange1;
  } 
    else if(val == 'Green'){
   	bdcolor = green;
    bdcolor1 = green1;
  } 
    else if(val == 'Purple'){
   	bdcolor = purple; 
    bdcolor1 = purple1;
  }
   
    else if(val == 'Pink'){
   	bdcolor = pink; 
    bdcolor1 = pink1;
  }
    else if(val == 'Black'){
   	bdcolor = black; 
    bdcolor1 = black1;
  }
  
}

function fshsize() {
  let set = scl.value();
    if(set == 'Default'){
    fsize = 1;
    fwidth = 0;
    fheight = 0;
  } 
    else if(set == 'smol'){
   	fsize = 0.5;
    fwidth = width;
    fheight = height;
  } 
    else if(set == 'BIG'){
   	fsize = 1.5; 
    fwidth = - width/3;
    fheight = - height/3;
  }
  
}

function screenText(){
  textSize(20);
  fill(0,174,239);
  text("Color",width-470,38);
  text("Size",width-280,38);
//  text("Fish's Name:", 300,38);

  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}