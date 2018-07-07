
function Cactus() {
  this.x = 750;
  this.y = 170;
  this.width = 20;
  this.height= 30;
  this.acc = 3;

  this.show = function(){
    this.x = this.x - this.acc;
    fill(255,0,0);
    rect(this.x, this.y, this.width, this.height);
  }
}
