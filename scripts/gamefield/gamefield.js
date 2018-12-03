class Gamefield {
  constructor() {
    this.codeText = new CodeText();
  }

  render(context) {
    this.codeText.fillText(context);
  } 
}