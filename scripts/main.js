let canvas = document.getElementById('game-screen');
let context = canvas.getContext('2d');

// Initialize characters
let mainCharacter = new MainCharacter(context);
let lifeLine = new LifeItem(context);


function gameLoop(timestamp) {
  clearCanvas();
  
  mainCharacter.update(context, canvas);
  lifeLine.update(context);

  requestAnimationFrame(gameLoop);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

gameLoop();
