class Gamefield {
  constructor() {
    this.codeText = new CodeText();
    this.codeText.fillText(context);
  }
  
  render(context) {
    this.codeText.fillText(context);
  }

  getCodeCoordinates() {
    return this.codeText.getCodeCoordinates();
  }
}