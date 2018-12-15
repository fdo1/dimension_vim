let canvas = document.getElementById('game-screen');
let context = canvas.getContext('2d');

// Initialize Game Field
let numberTabs = new NumberTabs();
let gamefield = new Gamefield();

// Initialize characters
let mainCharacter = new MainCharacter(context, gamefield.getCodeCoordinates());

function gameLoop(timestamp) {
  clearCanvas();
  
  mainCharacter.update(context, gamefield.getCodeCoordinates());
  gamefield.render(context);
  numberTabs.render(context);

  requestAnimationFrame(gameLoop);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

gameLoop();
