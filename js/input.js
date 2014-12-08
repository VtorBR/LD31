function setInput(Game) {
  Game.setTouch = function(mode) {
    console.log(mode);
    if (mode == 'play') {
      Game.canvas.onmousedown = function (e) {
        var rect = Game.canvas.getBoundingClientRect();
        var mX = e.clientX - rect.left - 20;
        var mY = e.clientY - rect.top - 20;

        for (var i=0; i<Game.coins.length; i++) {
          if (Game.coins[i] &&
              (Game.coins[i].x - mX) * (Game.coins[i].x - mX) +
              (Game.coins[i].y - mY) * (Game.coins[i].y - mY) < 256) {
            Game.curCoin = Game.coins[i];
            Game.isDragging = true;
            Game.sound.play();
            Game.clickOffset.x = Game.curCoin.x - mX;
            Game.clickOffset.y = Game.curCoin.y - mY;
            break;
          }
        }
      }

      Game.canvas.ontouchstart = function (e) {
        var rect = Game.canvas.getBoundingClientRect();

        e.preventDefault();

        var mX = e.targetTouches[0].clientX - rect.left - 20;
        var mY = e.targetTouches[0].clientY - rect.top - 20;

        for (var i=0; i<Game.coins.length; i++) {
          if (Game.coins[i] &&
            (Game.coins[i].x - mX) * (Game.coins[i].x - mX) +
            (Game.coins[i].y - mY) * (Game.coins[i].y - mY) < 256) {
              Game.curCoin = Game.coins[i];
              Game.isDragging = true;
              Game.sound.play();
              Game.clickOffset.x = Game.curCoin.x - mX;
              Game.clickOffset.y = Game.curCoin.y - mY;
              break;
          }
        }
      }

      Game.canvas.onmousemove = function (e) {
        if (Game.isDragging) {
          e.target.style.cursor = 'move';
          var rect = Game.canvas.getBoundingClientRect();
          var bound = 19;
          Game.curCoin.x = e.clientX - rect.left + Game.clickOffset.x - 20;
          Game.curCoin.y = e.clientY - rect.top + Game.clickOffset.y - 20;
          if (Game.curCoin.x < bound) {
            Game.curCoin.x = bound;
          }
          else if (Game.curCoin.x > 640 - bound) {
            Game.curCoin.x = 640 - bound;
          }
          if (Game.curCoin.y < bound) {
            Game.curCoin.y = bound;
          }
          else if (Game.curCoin.y > 480 - bound) {
            Game.curCoin.y = 480 - bound;
          }
        }
      }

      Game.canvas.ontouchmove = function (e) {
        e.preventDefault();

        if (Game.isDragging) {
          var rect = Game.canvas.getBoundingClientRect();
          var bound = 19;
          Game.curCoin.x = e.targetTouches[0].clientX - rect.left + Game.clickOffset.x - 20;
          Game.curCoin.y = e.targetTouches[0].clientY - rect.top + Game.clickOffset.y - 20;
          if (Game.curCoin.x < bound) {
            Game.curCoin.x = bound;
          }
          else if (Game.curCoin.x > 640 - bound) {
            Game.curCoin.x = 640 - bound;
          }
          if (Game.curCoin.y < bound) {
            Game.curCoin.y = bound;
          }
          else if (Game.curCoin.y > 480 - bound) {
            Game.curCoin.y = 480 - bound;
          }
        }
      }

      Game.canvas.onmouseup = function (e) {
        e.target.style.cursor = 'auto';
        Game.isDragging = false;
        Game.sound.pause();
      }

      Game.canvas.ontouchend = function (e) {
        Game.isDragging = false;
        Game.sound.pause();
      }


    }
    else if (mode == 'music') {
      Game.canvas.onmousedown = function (e) {
        var rect = Game.canvas.getBoundingClientRect();
        var mX = e.clientX - rect.left - 20;
        var mY = e.clientY - rect.top - 20;

        if (20 + mX > 675 && 20 + mX < 785 && 20 + mY > 138 && 20 + mY < 170) {
          Game.init();
          console.log('cima');
        }
        if (20 + mX > 675 && 20 + mX < 735 && 20 + mY > 180 && 20 + mY < 209) {
          Game.sound.song = (Game.sound.song+1)%3;
          console.log('baixo');
        }

        for (var i=0; i<Game.coins.length; i++) {
          if (Game.coins[i] &&
            (Game.coins[i].x - mX) * (Game.coins[i].x - mX) +
            (Game.coins[i].y - mY) * (Game.coins[i].y - mY) < 256) {
              Game.curCoin = Game.coins[i];
              Game.isDragging = true;
              Game.sound.play();
              Game.clickOffset.x = Game.curCoin.x - mX;
              Game.clickOffset.y = Game.curCoin.y - mY;
              break;
            }
          }
        }

        Game.canvas.ontouchstart = function (e) {
          e.preventDefault();
          var rect = Game.canvas.getBoundingClientRect();
          var mX = e.targetTouches[0].clientX - rect.left - 20;
          var mY = e.targetTouches[0].clientY - rect.top - 20;

          if (20 + mX > 675 && 20 + mX < 785 && 20 + mY > 138 && 20 + mY < 170) {
            Game.init();
            console.log('cima');
          }
          if (20 + mX > 675 && 20 + mX < 735 && 20 + mY > 180 && 20 + mY < 209) {
            Game.sound.song = (Game.sound.song+1)%3;
            console.log('baixo');
          }

          for (var i=0; i<Game.coins.length; i++) {
            if (Game.coins[i] &&
                (Game.coins[i].x - mX) * (Game.coins[i].x - mX) +
                (Game.coins[i].y - mY) * (Game.coins[i].y - mY) < 256) {
              Game.curCoin = Game.coins[i];
              Game.isDragging = true;
              Game.sound.play();
              Game.clickOffset.x = Game.curCoin.x - mX;
              Game.clickOffset.y = Game.curCoin.y - mY;
              break;
            }
          }
        }

        Game.canvas.onmousemove = function (e) {
          var rect = Game.canvas.getBoundingClientRect();
          var mX = e.clientX - rect.left;
          var mY = e.clientY - rect.top;

          if (mX > 675 && mX < 785 && mY > 138 && mY < 170) {
            e.target.style.cursor = 'pointer';
          }
          else if (mX > 675 && mX < 735 && mY > 180 && mY < 209) {
            e.target.style.cursor = 'pointer';
          }
          else {
            e.target.style.cursor = 'auto';
          }
          if (Game.isDragging) {
            e.target.style.cursor = 'move';
            // var rect = Game.canvas.getBoundingClientRect();
            var bound = 19;
            Game.curCoin.x = mX + Game.clickOffset.x - 20;
            Game.curCoin.y = mY + Game.clickOffset.y - 20;
            if (Game.curCoin.x < bound) {
              Game.curCoin.x = bound;
            }
            else if (Game.curCoin.x > 640 - bound) {
              Game.curCoin.x = 640 - bound;
            }
            if (Game.curCoin.y < bound) {
              Game.curCoin.y = bound;
            }
            else if (Game.curCoin.y > 480 - bound) {
              Game.curCoin.y = 480 - bound;
            }
          }
        }

        Game.canvas.ontouchmove = function (e) {
          e.preventDefault();

          if (Game.isDragging) {
            var rect = Game.canvas.getBoundingClientRect();
            var bound = 19;
            Game.curCoin.x = e.targetTouches[0].clientX - rect.left + Game.clickOffset.x - 20;
            Game.curCoin.y = e.targetTouches[0].clientY - rect.top + Game.clickOffset.y - 20;
            if (Game.curCoin.x < bound) {
              Game.curCoin.x = bound;
            }
            else if (Game.curCoin.x > 640 - bound) {
              Game.curCoin.x = 640 - bound;
            }
            if (Game.curCoin.y < bound) {
              Game.curCoin.y = bound;
            }
            else if (Game.curCoin.y > 480 - bound) {
              Game.curCoin.y = 480 - bound;
            }
          }
        }

        Game.canvas.onmouseup = function (e) {
          e.target.style.cursor = 'auto';
          Game.isDragging = false;
          Game.sound.pause();
        }

        Game.canvas.ontouchend = function (e) {
          Game.isDragging = false;
          Game.sound.pause();
        }
    }
    else if (mode == 'menu') {
      Game.canvas.onmousemove = function (e) {
        var rect = Game.canvas.getBoundingClientRect();
        var mX = e.clientX - rect.left;
        var mY = e.clientY - rect.top;

        if (mX > 675 && mX < 785 && mY > 138 && mY < 170) {
          e.target.style.cursor = 'pointer';
        }
        else if (mX > 675 && mX < 735 && mY > 180 && mY < 209) {
          e.target.style.cursor = 'pointer';
        }
        else {
          e.target.style.cursor = 'auto';
        }
      }

      Game.canvas.onmousedown = function (e) {
        var rect = Game.canvas.getBoundingClientRect();
        var mX = e.clientX - rect.left;
        var mY = e.clientY - rect.top;

        if (mX > 675 && mX < 785 && mY > 138 && mY < 170) {
          Game.start();
        }
        else if (mX > 675 && mX < 735 && mY > 180 && mY < 209) {
          Game.music();
        }
      }
    }
  }
}
