class MainCharacter {
  constructor(context, gamefieldCoordinates) {
    this.constants = new Constants();
    this.width = this.constants.tile.width;
    this.height = this.constants.tile.height;
    
    this.position = {
      x : this.width,
      y : 0
    }
    this.tileCoordinates = {
      x: 0,
      y: 0
    }

    this.initializeControls(gamefieldCoordinates);
  }

  render(context) {
    context.beginPath();
    context.fillStyle = 'rgb(132, 251, 119)';

    context.strokeStyle = 'rgba(132, 251, 119, 0.3)';
    context.lineWidth = 20;

    context.strokeRect(this.position.x, this.position.y, this.width, this.height);
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  
  initializeControls(gamefieldCoordinates) {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 74:
          if ((this.tileCoordinates.y + 1) <= (gamefieldCoordinates.length - 1)) {
            this.tileCoordinates.y += 1;
            this.position.y += this.height;
          }
          break;

        case 75:
          if (this.tileCoordinates.y - 1 >= 0) {
            this.position.y -= this.height;
            this.tileCoordinates.y -= 1;
          }
          break;

        case 76:
          console.log(gamefieldCoordinates[this.tileCoordinates.y].length - 1);
          if (this.tileCoordinates.x + 1 <= gamefieldCoordinates[this.tileCoordinates.y].length - 1) {
            this.position.x += this.width;
            this.tileCoordinates.x += 1;
          }
          break;

        case 72:
          if (this.tileCoordinates.x - 1 >= 0) {
            this.position.x -= this.width;
            this.tileCoordinates.x -= 1;
          }
          break;
      }
    });
  }

  update(context, gamefieldCoordinates) {
    // this.validateBoundaries(gamefieldCoordinates);
    this.render(context);
  }

  validateBoundaries(gamefieldCoordinates) {

  }
}