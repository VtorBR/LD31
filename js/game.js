var Game = {
  canvas : document.getElementById("gameCanvas"),
  context : document.getElementById("gameCanvas").getContext("2d"),
  sound : new SoundManager(),
  state : 'init',
  score : 0,
  flipCount : 0,
  frameCount : 1,
  speed : 256,
  isDragging : false,
  curCoin : 0,
  clickOffset : {
    x : 0,
    y : 0
  },
  areas : [],
  coins : [],
  colors : ['#c0c0c0', '#c0c000', '#00c0c0', '#00c000', '#c000c0', '#c00000',
  '#0000c0', '#00214c', '#ffffff', '#32006a', '#090909', '#1d1d1d', '#131313'],
  tier : ['white', 'brown', 'silver', 'gold'],
  returnCode : 0
}

setInput(Game);

Game.init = function() {
  Game.state = 'init';
  Game.sound.song = 0;

  Game.flipCount = 0;
  Game.frameCount = 1;
  Game.speed = 256;
  Game.isDragging = false;
  Game.curCoin = 0;

  Game.areas = [];
  Game.coins = [];
  // Big bars
  Game.areas.push(new Area(0, 0, 91, 320, 0));
  Game.areas.push(new Area(91, 0, 91, 320, 1));
  Game.areas.push(new Area(182, 0, 91, 320, 2));
  Game.areas.push(new Area(273, 0, 91, 320, 3));
  Game.areas.push(new Area(364, 0, 91, 320, 4));
  Game.areas.push(new Area(455, 0, 91, 320, 5));
  Game.areas.push(new Area(546, 0, 94, 320, 6));

  // Small bars
  Game.areas.push(new Area(0, 320, 91, 40, 6));
  Game.areas.push(new Area(91, 320, 91, 40, 12));
  Game.areas.push(new Area(182, 320, 91, 40, 4));
  Game.areas.push(new Area(273, 320, 91, 40, 12));
  Game.areas.push(new Area(364, 320, 91, 40, 2));
  Game.areas.push(new Area(455, 320, 91, 40, 12));
  Game.areas.push(new Area(546, 320, 94, 40, 0));

  // Squares
  Game.areas.push(new Area(0, 360, 114, 120, 7));
  Game.areas.push(new Area(114, 360, 114, 120, 8));
  Game.areas.push(new Area(228, 360, 114, 120, 9));
  Game.areas.push(new Area(342, 360, 113, 120, 12));

  // Stripes
  Game.areas.push(new Area(455, 360, 30, 120, 10));
  Game.areas.push(new Area(485, 360, 30, 120, 12));
  Game.areas.push(new Area(515, 360, 31, 120, 11));

  // Final
  Game.areas.push(new Area(546, 360, 94, 120, 12));

  Game.setTouch('menu');

  Game.draw();
}

Game.music = function() {
  Game.state = 'music';
  Game.sound.song = 1;

  Game.coins.push(new Coin(620 - Math.random()*600, 460 - Math.random()*440));

  Game.setTouch('music');
}

Game.start = function() {
  Game.state = 'start';
  Game.sound.song = 1;
  Game.score = 0;

  Game.coins.push(new Coin(620 - Math.random()*600, 460 - Math.random()*440));

  Game.setTouch('play');
}

Game.run = function() {
  console.log(Game.state);
  if (Game.state == 'start' || Game.state == 'music') {
    Game.update();
  }
  Game.draw();
  Game.sound.background();
  Game.returnCode = window.requestAnimationFrame(Game.run);
}

Game.update = function() {
  for (var i=0; i<Game.areas.length; i++) {
    if (Game.areas[i].contains( Game.curCoin.x, Game.curCoin.y)) {
      Game.sound.setFrequency(Game.areas[i].color);
      break;
    }
  }

  if (Game.state != 'music') {
    if (Game.frameCount++ > Game.speed && SoundManager.step % 2 == 0) {
      Game.speed-=2;
      if (Game.speed < 128) {
        Game.sound.song = 2;
      }
      Game.frameCount = 0;
      Game.flipCount++;
      for (var i = Game.coins.length - 1; i>=0; i--) {
        if (Game.coins[i]) {
          Game.coins[i].update();
          if (Game.coins[i].level <= 0) {
            if (Game.curCoin == Game.coins[i]) {
              Game.curCoin = 0;
              Game.isDragging = false;
              Game.sound.pause();
            }
            Game.coins.splice(i, 1);
            Game.sound.alert('dead');
          }
        }
      }
      Game.areas.forEach(function(element) {
        element.update();
      });
      if (Game.flipCount % 5 == 0) {
        Game.coins.push(new Coin(620 - Math.random()*600, 460 - Math.random()*440));
        Game.sound.alert('born');
      }
      else if (Game.coins.length == 0) {
        Game.init();
      }
    }
  }
}

Game.draw = function() {
  // Display
  Game.context.lineWidth = 10;
  Game.context.beginPath();
  Game.context.rect(665, 30, 90, 50);
  Game.context.fillStyle = Game.context.strokeStyle = Game.state=='start'?'#42da42':'#326632';
  Game.context.fill();
  Game.context.stroke();

  Game.areas.forEach(function(element) {
    element.draw(Game.context);
  });
  Game.coins.forEach(function(element) {
    element.draw(Game.context);
  });
  Game.context.fillStyle = 'rgba(13, 13, 13, 0.61)';
  Game.context.textAlign = 'left';
  Game.context.font="bold 50px Futura";
  Game.context.fillText(Game.score, 665, 74);

  if (Game.state == 'init') {
    Game.context.fillStyle = 'rgba(0, 0, 0, 0.5)';
    Game.context.fillRect(0, 0, 640, 480);
  }
}

Game.getColor = function(x, y) {
  for (var i=0; i<Game.areas.length; i++) {
    if (Game.areas[i] && Game.areas[i].contains(x, y)) {
      return Game.areas[i].color;
    }
  }
}

// Start the game
drawOnce(Game);
Game.run();
Game.init();
Game.sound.start();
