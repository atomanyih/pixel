function Canvas(elementId) {
  var canvas = document.getElementById(elementId);
  var context = canvas.getContext('2d');

  this.height = canvas.height;
  this.width = canvas.width;

  context.imageSmoothingEnabled = false;

  this.clear = function clear() {
    context.clearRect(0,0,this.width,this.height);
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
