class MainCharacter {
  constructor(context) {
    this.constants = new Constants();
    this.width = this.constants.tile.width;
    this.height = this.constants.tile.height;

    this.position = {
      x : 0,
      y : 0
    }
    this.tileCoordinates = {
      x: 0,
      y: 0
    }

    this.render(context)
    this.initializeControls();
  }

  render(context) {
    context.beginPath();
    context.fillStyle = 'rgb(132, 251, 119)';

    // context.strokeStyle = 'rgba(132, 251, 119, 0.3)';
    // context.lineWidth = 20;

    // context.strokeRect(this.position.x, this.position.y, this.width, this.height);
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  initializeControls() {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 74:
          this.position.y += this.height;
          this.tileCoordinates.y += 1;
          break;

        case 75:
          this.position.y -= this.height;
          this.tileCoordinates.y -= 1;
          break;

        case 76:
          this.position.x += this.width;
          this.tileCoordinates.x += 1;
          break;

        case 72:
          this.position.x -= this.width;
          this.tileCoordinates.x -= 1;
          break;
      }
    });
  }

  update(context, canvas) {
    this.validateBoundaries(canvas);
    this.render(context)
  }

  validateBoundaries(canvas) {
    if (this.position.y < 0) {
      this.position.y = 0;
      this.tileCoordinates.y = 0;
    }
    else if (this.position.y >= canvas.height) {
      this.position.y = canvas.height - this.height;
    }
    else if (this.position.x < 40) {
      this.position.x = 40;
    }
    else if (this.position.x >= canvas.width) {
      this.position.x = canvas.width - this.width;
    }
  }
}