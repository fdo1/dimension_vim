class NumberTabs {
  constructor() {
    this.Constants = new Constants();
  }

  render(context) {
    context.font = `${this.Constants.fontSize}pt Calibri`;
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = 'middle';
    context.fillText("H", this.Constants.tile.width/2, this.Constants.tile.height/2); 
  }
}