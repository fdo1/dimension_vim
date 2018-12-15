class CodeText {
  constructor(){
    this.levelCodeText =
      "import '/modules/level-1'^"
      + "var lib = require('/lib')^"
      + "var index = lib.getLevelIndex();^"
      + "function loadLevel(params) {^"
      + "var something = new Something()^"
      + "something.displaySomething();^"
      + "var anotherThing = new Another() }^"
      + "var something = new Something()^"
      + "something = anotherThing.reset()^"
      + "console.log('This is the end of line')";

    this.constants = new Constants();
  }
  
  fillText (context) {
    var _this = this;
    var positionYIndex = 0;
    var positionXIndex = 0;
    var codeXCoordinates = [];
    this.codeCoordinates = [];

    this.levelCodeText.split('').forEach(function(c, index){
      var character = _this.levelCodeText.substr(index, 1);
      positionXIndex++;
      if(character=='^') {
        character = '';
        positionYIndex++;
        positionXIndex = 0;
        codeXCoordinates = [];
      }
      var positionY = _this.constants.tile.height/2 + _this.constants.tile.height * positionYIndex;
      var positionX = _this.constants.tile.width/2 + _this.constants.tile.width * positionXIndex;

      context.font = `${_this.constants.fontSize}pt Arial`;
      context.fillStyle = "white";
      context.textAlign = "center";
      context.textBaseline = 'middle';
      context.fillText(character, positionX, positionY);

      if(character != '')
        codeXCoordinates.push({
          character: character,
          x_position: _this.constants.tile.width * positionXIndex,
          y_position: _this.constants.tile.height * positionYIndex
        });
      _this.codeCoordinates[positionYIndex] = codeXCoordinates;
    });
  }

  getCodeCoordinates() {
    return this.codeCoordinates;
  }
}