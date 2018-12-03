class CodeText {
  constructor(){
    this.levelCodeText =
      "import '/modules/level-1'^"
     + "var lib = require('/lib')";
    this.constants = new Constants();
  }

  fillText (context) {
    var positionYIndex = 0;

    this.levelCodeText.split('').forEach(c => console.log(c));

    for(var i = 0; i < this.levelCodeText.length; ++i ) {
      var character = this.levelCodeText.substr(i, 1);
      if(character == '^') {
        positionYIndex++;
        character = '';
      }
      var positionY = this.constants.tile.height/2 + this.constants.tile.height * positionYIndex;
      var positionXIndex = i + 1;
      var positionX = this.constants.tile.width/2 + this.constants.tile.width * positionXIndex;

      context.font = `${this.constants.fontSize}pt Calibri`;
      context.fillStyle = "white";
      context.textAlign = "center";
      context.textBaseline = 'middle';
      context.fillText(character, positionX, positionY); 
    }
  }
}