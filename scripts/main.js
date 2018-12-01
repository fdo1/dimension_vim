let canvas = document.getElementById('game-screen');
let context = canvas.getContext('2d');

// Initialize characters
let mainCharacter = new MainCharacter(context);

// Initialize Game Field
let numberTabs = new NumberTabs();


function gameLoop(timestamp) {
  clearCanvas();
  
  mainCharacter.update(context, canvas);
  numberTabs.render(context)

  requestAnimationFrame(gameLoop);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

gameLoop();
