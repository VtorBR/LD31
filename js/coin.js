function Coin(x, y) {
  this.x = x;
  this.y = y;
  this.color = Math.floor(Math.random() * Game.colors.length);
  this.level = 1;

  this.update = function() {
    if (Game.getColor(this.x, this.y) == this.color) {
      Game.score += this.level;
      if (this.level < 3) {
        this.level++;
      }
    }
    else {
      this.level--;
    }
  }

  this.draw = function(context) {
    var bonus = Game.curCoin == this && Game.isDragging?1:0;
    context.fillStyle = Game.tier[this.level];
    context.strokeStyle = Game.colors[this.color];
    context.lineWidth = 10;
    context.beginPath();
    context.arc(this.x, this.y, 10+this.level+bonus, 0, Math.PI*2)
    context.fill();
    context.stroke();
  }
};
