let playerX=50;
let playerY=10;

let playerHeight=50;
let playerWidth=20;

let accPlayer=0;

let enemy;
let Arrenemy = [];

let col;

function setup() {
  createCanvas(700,201);
  enemy = new Cactus();
  Arrenemy.push(enemy);

}

function draw() {
  background(200);

  if(!col){
  let distance = floor(random(60))
    if(Arrenemy[Arrenemy.length-1].x < 500+distance ){
        enemy = new Cactus();
        enemy.width+=floor(random(10));
        enemy.height+=floor(random(10));
        enemy.y= height- enemy.height-1;
        Arrenemy.push(enemy);
      }

    accPlayer=accPlayer+0.2;
    if (accPlayer>5){
      accPlayer=5;
    }
    playerY=playerY+accPlayer;
    if((playerY+playerHeight)>(height-1)){
      playerY=150;
      accPlayer=0;
    }

    for(let i=0; i<Arrenemy.length; i++){
      if(Arrenemy[i].x < 0-Arrenemy[i].width){
        Arrenemy.reverse();
        Arrenemy.pop();
        Arrenemy.reverse();
      }
      Arrenemy[i].show();
    }
    fill(255);
    rect(playerX, playerY, playerWidth, playerHeight)
    collision();
  }


}

function collision(){

  for(let i=0; i<Arrenemy.length; i++){
    if ((playerX<Arrenemy[i].x) && ((playerX+playerWidth)>(Arrenemy[i].x)) && (playerY<(Arrenemy[i].y)) && ((playerY+playerHeight)>(Arrenemy[i].y ))){
      console.log("Collision");
      col=1;
    }
  }
}

function keyPressed(){
  if(key==" "){
    if(playerY==150)
    accPlayer=accPlayer-5
  }
}
