function Canvas(elementId) {
  var canvas = document.getElementById(elementId);
  var context = canvas.getContext('2d');
  var partitions = 1;

  this.height = canvas.height;
  this.width = canvas.width;

  context.imageSmoothingEnabled = false;

  this.fitToWindow = function fitToWindow() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    canvas.height = this.height;
    canvas.width = this.width;
  };

  this.drawCircle = function drawCircle() {
    context.fillStyle = 'black';
    context.arc(this.width / 2, this.height / 3, 50, 0, 2 * Math.PI, false);
    context.fill();
  };

  this.clear = function clear() {
    context.clearRect(0, 0, this.width, this.height);
  };

  this.drawPixel = function fillPixel(x, y, color) {
    if (color) {
      context.fillStyle = color.toRgb();
    } else {
      context.fillStyle = 'rgb(0,0,0)';
    }

    context.fillRect(x, y, 1, 1);

    context.save();

    self = this;
    centerX = Math.floor(self.width/2);
    centerY = Math.floor(self.height/2);
    numSections = partitions;

    function drawPartition() {
      context.translate(centerX, centerY);
      context.rotate((Math.PI/180)*360/numSections);
      context.translate(-centerX, -centerY);
      context.fillRect(x, y, 1, 1);
    }

    for(var i = 1; i < numSections; i++) {
      drawPartition();
    }

    context.restore();
  };

  this.surroundings = function surroundings(x, y) {
    var width = 3;
    var height = 3;
    var imageData = context.getImageData(x - 1, y - 1, width, height);

    function alphaAt(x, y) {
      var numChannels = 4;

      return 255 - imageData.data[numChannels * (width * y + x) + 3];
    }


    return {
      left: alphaAt(0, 1) / 255,
      right: alphaAt(2, 1) / 255,
      up: alphaAt(1, 0) / 255,
      down: alphaAt(1, 2) / 255
    }
  };

  this.fade = function fade() {
    context.fillStyle = 'rgba(0,0,0,.1)';
    context.fillRect(0, 0, this.width, this.height);
  };

  this.setKaleidoscope = function setKaleidoscope(numPartitions) {
    partitions = numPartitions;
  };
}
