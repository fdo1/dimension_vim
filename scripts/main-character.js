class MainCharacter {
  constructor(gamefieldCoordinates) {
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
    var _this = this;
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 74:
          _this.validateTopBoundary(gamefieldCoordinates);
          _this.validatePositionInLine(gamefieldCoordinates);
          break;

        case 75:
          _this.validateBottomBoundary();
          _this.validatePositionInLine(gamefieldCoordinates);
          break;

        case 76:
          _this.validateRightBoundary(gamefieldCoordinates);
          break;

        case 72:
          _this.validateLeftBoundary();
          break;
      }
    });
  }

  validateTopBoundary(gamefieldCoordinates) {
    if ((this.tileCoordinates.y + 1) <= (gamefieldCoordinates.length - 1)) {
      this.tileCoordinates.y += 1;
      this.position.y += this.height;
    }
  }

  validateBottomBoundary() {
    if (this.tileCoordinates.y - 1 >= 0) {
      this.position.y -= this.height;
      this.tileCoordinates.y -= 1;
    }
  }

  validateRightBoundary(gamefieldCoordinates) {
    if (this.tileCoordinates.x + 1 <= gamefieldCoordinates[this.tileCoordinates.y].length - 1) {
      this.position.x += this.width;
      this.tileCoordinates.x += 1;
    }
  }

  validateLeftBoundary() { 
    if (this.tileCoordinates.x - 1 >= 0) {
      this.position.x -= this.width;
      this.tileCoordinates.x -= 1;
    }
  }

  validatePositionInLine(gamefieldCoordinates) {
    if(this.tileCoordinates.x > gamefieldCoordinates[this.tileCoordinates.y].length - 1) {
      var lastPositionInRow = gamefieldCoordinates[this.tileCoordinates.y].length - 1
      this.position.x = gamefieldCoordinates[this.tileCoordinates.y][lastPositionInRow].x_position;
      this.tileCoordinates.x = lastPositionInRow;
    }
  }
}