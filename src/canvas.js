function Canvas(elementId) {
  var canvas = document.getElementById(elementId);
  var context = canvas.getContext('2d');

  this.drawPixel = function fillPixel(x,y) {
    context.fillStyle = 'rgb(0,0,0)';
    context.fillRect(x,y,1,1);
  }
}
