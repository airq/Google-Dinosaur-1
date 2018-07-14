let playerX=50;
let playerY=10;

let playerHeight=50;
let playerWidth=20;

let accPlayer=0;
let accEnemy=5;

let enemy;
let Arrenemy = [];

let col;
let score;
let licznik;
let hiScore;
let alfa=50;
let posGameOver=40;
let resetButtonX;
let resetButtonY;
let resetButtonWidth=40;
let resetButtonHeiht=40;
let restartButton=10;

function setup() {
  createCanvas(700,201);
  enemy = new Cactus();
  Arrenemy.push(enemy);
  score=0;
  licznik=0;
  hiScore=0;
  resetButtonX=width/2-(resetButtonWidth/2);
  resetButtonY=height/2;
}

function draw() {
  background(200);

  if(!col){
  let distance = floor(random(100, 200));
    if(Arrenemy[Arrenemy.length-1].x < 500-distance ){
        enemy = new Cactus();
        enemy.width+=floor(random(10));
        enemy.height+=floor(random(10));
        enemy.y= height- enemy.height-1;
        enemy.acc = accEnemy;
        Arrenemy.push(enemy);
      }

    accPlayer=accPlayer+0.3;
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
    if((licznik%10)==0){
      score++;
    }
  }
  else{

    for(let i=0; i<Arrenemy.length; i++){
      Arrenemy[i].showGameOver();
    }
    fill(255);
    rect(playerX, playerY, playerWidth, playerHeight)


    textSize(32);
    textAlign(CENTER);
    fill(50,alfa);
    text("Game Over", width/2, height/2+posGameOver-20);

    if(score>hiScore){
      hiScore=score;
    }

    if(score==hiScore){
      textSize(12);
      text("New HiScore: " + hiScore, width/2, height/2+posGameOver);
      restartButton=10;
    }

    fill(100,alfa);
    rect(resetButtonX, resetButtonY+restartButton+posGameOver, resetButtonWidth, resetButtonHeiht);

    if(posGameOver>1){
      posGameOver--
    }

    if(alfa<255){
      alfa+=5;
    }
    restartButton=0;
  }

  textSize(16);
  textAlign(LEFT);
  fill(125);
  text(("Score: " + score),width-100, 20) ;
  text(("Hi Score: " + hiScore),width-210, 20) ;
  licznik++;
  accEnemy+=0.001;
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
    accPlayer=accPlayer-6
  }
}

function mouseClicked(){
  if(resetButtonX<mouseX && (resetButtonX+resetButtonY+restartButton+posGameOver)>mouseX && resetButtonY<mouseY && resetButtonY+resetButtonHeiht>mouseY){
    RestartGame();
  }
}

function RestartGame(){
  fill(150);
  rect(resetButtonX, resetButtonY+restartButton+posGameOver, resetButtonWidth, resetButtonHeiht);
  Arrenemy = [];
  enemy = new Cactus();
  Arrenemy.push(enemy);
  score=0;
  licznik=0;
  accEnemy=5;
  col=0;
  playerY=10;
  posGameOver=40;
}
