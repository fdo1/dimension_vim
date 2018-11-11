class MainCharacter {
  constructor(context, canvas) {
    this.width = 30;
    this.height = 60;

    // this.positionX = 0;
    // this.positionY = 0;

    this.position = {
      x : 0,
      y : 0
    }

    this.context = context;
    this.canvas = canvas;

    this.initializeControls();
  }

  draw() {
    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
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
    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}