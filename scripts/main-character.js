class MainCharacter {
  constructor(context, canvas) {
    this.width = 12;
    this.height = 36;

    this.position = {
      x : 0,
      y : 0
    }

    this.context = context;
    this.canvas = canvas;

    this.initializeControls();
  }

  
  render() {
    this.context.fillStyle = 'rgb(132, 251, 119)';

    this.context.strokeStyle = 'rgba(132, 251, 119, 0.3)';
    this.context.lineWidth = 10;

    this.context.strokeRect(this.position.x, this.position.y, this.width, this.height);
    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  renderShadow() {

  }

  
  initializeControls() {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 74:
          this.position.y += this.height;
          this.updatePosition();
          break;

        case 75:
          this.position.y -= this.height;
          this.updatePosition();
          break;

        case 76:
          this.position.x += this.width;
          this.updatePosition();
          break;

        case 72:
          this.position.x -= this.width;
          this.updatePosition();
          break;
      }
    });
  }

  updatePosition() {
    this.clearCanvas();
    this.validateBoundaries();
    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.context.strokeRect(this.position.x, this.position.y, this.width, this.height);
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  validateBoundaries() {
    if (this.position.y < 0) {
      this.position.y = 0;
    }
    else if (this.position.y >= this.canvas.height) {
      this.position.y = this.canvas.height - this.height;
    }
    else if (this.position.x < 0) {
      this.position.x = 0;
    }
    else if (this.position.x >= this.canvas.width) {
      this.position.x = this.canvas.width - this.width;
    }
  }
}