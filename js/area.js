function Area(x, y, w, h, color) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.color = color;

  this.update = function() {
    this.color = Math.floor(Math.random() * Game.colors.length);
  }

  this.draw = function(context) {
    context.fillStyle = Game.colors[this.color];
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  this.contains = function(x, y) {
    return x > this.x &&
           x < this.width + this.x &&
           y > this.y &&
           y < this.height + this.y;
  }
}
