function Canvas(elementId) {
  var canvas = document.getElementById(elementId);
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  context.imageSmoothingEnabled= false;

  this.clear = function clear() {
    context.clearRect(0,0,width,height);
  };

  this.drawPixel = function fillPixel(x,y,color) {
    context.fillStyle = color || 'rgb(0,0,0)';
    context.fillRect(x,y,1,1);
  };

  this.surroundings = function surroundings(x,y) {
    var width = 3;
    var height = 3;
    var imageData = context.getImageData(x-1,y-1,width,height);

    function alphaAt(x,y) {
      var numChannels = 4;

      return 255 - imageData.data[numChannels * (width * y + x) + 3];
    }


    return {
      left: alphaAt(0,1)/255,
      right: alphaAt(2,1)/255,
      up: alphaAt(1,0)/255,
      down: alphaAt(1,2)/255
    }
  };
}
