class LifeItem {
  constructor(context) {
    DELTA_X = 5;
    DELTA_Y = 15;
  }

  update(context) {
    context.beginPath();
    context.moveTo(DELTA_X * this.randomNumber(1, 10), 0);
    context.lineTo(45, 90 );
    context.lineWidth = 2;
    context.stroke();
  }

  randomNumber(min, max) {
    Math.floor(Math.random() * (max - min)) + min;
  }
}