function drawOnce() {
  // Draw once
  Game.context.translate(20, 20);
  // Body
  Game.context.lineWidth = 30;
  Game.context.lineJoin="round";
  Game.context.fillStyle = '#BF1238';
  Game.context.strokeStyle = '#BF1238';
  Game.context.beginPath();
  Game.context.rect(-5, -5, 770, 570);
  Game.context.fill();
  Game.context.stroke();

  // Plate
  Game.context.lineWidth = 10;
  Game.context.beginPath();
  Game.context.rect(655, 115, 110, 350);
  Game.context.fillStyle = '#babaca';
  Game.context.strokeStyle = '#babaca';
  Game.context.fill();
  Game.context.stroke();

  // Start
  Game.context.beginPath();
  Game.context.fillStyle = '#cc0000';
  Game.context.arc(668, 131, 11, 0 , Math.PI*2);
  Game.context.fill();
  Game.context.beginPath();
  Game.context.fillStyle = '#aa0000';
  Game.context.arc(668, 131, 9, 0 , Math.PI*2);
  Game.context.fill();
  Game.context.beginPath();
  Game.context.fillStyle = '#cc0000';
  Game.context.arc(670, 129, 8, 0 , Math.PI*2);
  Game.context.fill();
  Game.context.textAlign = 'left';
  Game.context.fillStyle = '#131313';
  Game.context.font="24px Futura";
  Game.context.fillText("START", 685, 140);

  // Start
  Game.context.beginPath();
  Game.context.fillStyle = '#cc0000';
  Game.context.arc(668, 171, 11, 0 , Math.PI*2);
  Game.context.fill();
  Game.context.beginPath();
  Game.context.fillStyle = '#aa0000';
  Game.context.arc(668, 171, 9, 0 , Math.PI*2);
  Game.context.fill();
  Game.context.beginPath();
  Game.context.fillStyle = '#cc0000';
  Game.context.arc(670, 169, 8, 0 , Math.PI*2);
  Game.context.fill();
  Game.context.textAlign = 'left';
  Game.context.fillStyle = '#131313';
  Game.context.font="24px Futura";
  Game.context.fillText("♫", 685, 180);

  // Instructions
  Game.context.font="15px Futura";
  Game.context.fillText("Instructions", 670, 215);
  Game.context.font="12px Futura";
  Game.context.fillText("Drag the coins to", 663, 239);
  Game.context.fillText("the matching area", 663, 250);

  Game.context.fillText("Coin", 715, 284);
  Game.context.fillText("Color", 715, 308);
  Game.context.fillText("Bronze  Silver   Gold", 650, 340);

  // Coin
  Game.context.fillStyle = Game.tier[3];
  Game.context.strokeStyle = Game.colors[3];
  Game.context.lineWidth = 10;
  Game.context.beginPath();
  Game.context.arc(680, 280, 11, 0, Math.PI*2)
  Game.context.fill();
  Game.context.stroke();
  Game.context.fillStyle = Game.tier[1];
  Game.context.strokeStyle = Game.colors[9];
  Game.context.beginPath();
  Game.context.arc(670, 365, 11, 0, Math.PI*2)
  Game.context.fill();
  Game.context.stroke();
  Game.context.fillStyle = Game.tier[2];
  Game.context.beginPath();
  Game.context.arc(710, 365, 12, 0, Math.PI*2)
  Game.context.fill();
  Game.context.stroke();
  Game.context.fillStyle = Game.tier[3];
  Game.context.beginPath();
  Game.context.arc(750, 365, 13, 0, Math.PI*2)
  Game.context.fill();
  Game.context.stroke();


  Game.context.strokeStyle = '#131313';
  Game.context.lineWidth = 1;
  Game.context.beginPath();
  Game.context.moveTo(680, 280);
  Game.context.lineTo(710, 280);
  Game.context.stroke();
  Game.context.beginPath();
  Game.context.moveTo(680, 290);
  Game.context.lineTo(680, 305);
  Game.context.lineTo(710, 305);
  Game.context.stroke();

  // Snowman
  Game.context.fillStyle = '#131313';
  Game.context.font="61px Futura";
  Game.context.fillText("☃", 677, 450);
  // Logo
  Game.context.fillStyle = '#aaaaaa';
  Game.context.font="bold 44px Futura";
  Game.context.textAlign = 'center';
  Game.context.fillText("SCREEN SAVER", 400, 545);
}
