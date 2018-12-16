class PowerSource {
  constructor (gamefieldCoordinates) {
    this.constants = new Constants();
    this.width = this.constants.tile.width;
    this.height = this.constants.tile.height;

    this.tileCoordinates = {
      x: 10,
      y: 5
    }

    this.position = {
      x: gamefieldCoordinates[this.tileCoordinates.y][this.tileCoordinates.x].x_position,
      y: gamefieldCoordinates[this.tileCoordinates.y][0].y_position
    }
  }

  render(context) {
    context.beginPath();
    context.fillStyle = 'rgb(80, 175, 214)';
    context.strokeStyle = 'rgba(132, 251, 119, 0.3)';
    context.lineWidth = 20;
    context.strokeRect(this.position.x, this.position.y, this.width, this.height);
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}