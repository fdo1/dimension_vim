class LifeItem {
  constructor(context) {
    this.DELTA_X = 30;
    this.update(context)
  }

  update(context) {
    console.log('Life item');
    context.beginPath();
    context.moveTo(this.DELTA_X, 0);
    context.lineTo(45, 90);
    context.lineWidth = 2;
    context.strokeStyle = '#ff0000';
    context.stroke();
  }

  randomNumber(min, max) {
    Math.floor(Math.random() * (max - min)) + min;
  }
}