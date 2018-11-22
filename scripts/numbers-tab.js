class NumberTabs {
  constructor() {
    this.lineNumbers = 10;
    this.render()
  }

  render() {
    for(var i = 1; i <= this.lineNumbers; ++i) {
      var $lineNumberText = $("<p class='line-number'>");
      $lineNumberText.text(i);
      var $lineNumberBox = $("<div class='line-number-box'>");
      $lineNumberBox.append($lineNumberText);
      $('#line-number-tab').append($lineNumberBox);
    }
  }
}