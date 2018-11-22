class MainCharacter {
  constructor(context) {
    this.width = 10;
    this.height = 30;

    this.position = {
      x : 0,
      y : 0
    }

    this.render(context)
    this.initializeControls();
  }

  render(context) {
    context.beginPath();
    context.fillStyle = 'rgb(132, 251, 119)';

    // context.strokeStyle = 'rgba(132, 251, 119, 0.3)';
    // context.lineWidth = 10;

    // context.strokeRect(this.position.x, this.position.y, this.width, this.height);
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  
  initializeControls() {
    document.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 74:
          this.position.y += this.height;
          break;

        case 75:
          this.position.y -= this.height;
          break;

        case 76:
          this.position.x += this.width;
          break;

        case 72:
          this.position.x -= this.width;
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
    }
    else if (this.position.y >= canvas.height) {
      this.position.y = canvas.height - this.height;
    }
    else if (this.position.x < 0) {
      this.position.x = 0;
    }
    else if (this.position.x >= canvas.width) {
      this.position.x = canvas.width - this.width;
    }
  }
}