let canvas = document.getElementById('game-screen');
let context = canvas.getContext('2d');

let mainCharacter = new MainCharacter(context, canvas);
mainCharacter.draw();