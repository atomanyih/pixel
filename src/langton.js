function Langton(x, y) {
  this.x = x;
  this.y = y;

  var direction = 0;
  var self = this;

  var length = 1;

  var movements = [
    function moveSouth() {
      self.y += length;
    },
    function moveEast() {
      self.x += length;
    },
    function moveNorth() {
      self.y -= length;
    },
    function moveWest() {
      self.x -= length;
    }
  ];

  function moveForward() {
    movements[direction]();
  }

  function turnLeft() {
    direction = (direction + 1) % 4
  }

  function turnRight() {
    direction = (direction - 1 + 4) % 4
  }

  this.move = function move(canvas) {
    if (canvas.alphaAt(this.x, this.y) == 0) {
      canvas.drawPixel(this.x, this.y, new Color(1, 0, 1));
      turnRight();
      moveForward();
    } else {
      canvas.clearPixel(this.x, this.y);
      turnLeft();
      moveForward();
    }
  };
}
