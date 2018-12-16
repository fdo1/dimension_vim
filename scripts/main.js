let canvas = document.getElementById('game-screen');
let context = canvas.getContext('2d');

// Initialize Game Field
let numberTabs = new NumberTabs();
let gamefield = new Gamefield();

// Initialize characters
let mainCharacter = new MainCharacter(gamefield.getCodeCoordinates());
let powerSource = new PowerSource(gamefield.getCodeCoordinates());

function gameLoop(timestamp) {
  clearCanvas();
  
  mainCharacter.render(context);
  powerSource.render(context);
  gamefield.render(context);
  numberTabs.render(context);

  requestAnimationFrame(gameLoop);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

gameLoop();
