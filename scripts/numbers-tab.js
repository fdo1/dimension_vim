class NumberTabs {
  constructor() {
    this.constants = new Constants();
  }

  render(context) {
    self = this;
    var numberOfRows = 10;

    for(var i = 0; i < numberOfRows; ++i) {
      var position_y = this.constants.tile.height/2 + this.constants.tile.height * i;
      context.font = `${this.constants.numberFontSize}pt Calibri`;
      context.fillStyle = "gray";
      context.textAlign = "center";
      context.textBaseline = 'middle';
      context.fillText(i+1, this.constants.tile.width/2, position_y); 
    }
  } 
}