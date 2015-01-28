function Lindenmayer(start, rules) {
  var state = start;

  function advance(state, rules) {
    var nextState = [];

    state.forEach(function(item) {
      var replacement = rules[item] || item;
      nextState = nextState.concat(replacement);
    });

    return nextState;
  }

  this.next = function next() {
    return advance(state, rules);
  };

  this.generate = function generate(depth) {
    var nextState = state;

    for(var i = 0; i < depth; i++) {
      nextState = advance(nextState, rules);
    }

    return nextState
  };
}

function Dude(x, y) {
  this.x = x;
  this.y = y;

  var direction = 0;
  var self = this;

  var movements = [
    function moveSouth() {
      self.y++;
    },
    function moveEast() {
      self.x++;
    },
    function moveNorth() {
      self.y--;
    },
    function moveWest() {
      self.x--;
    }
  ];

  this.moveForward = function moveForward() {
    movements[direction]();
  };

  this.turnLeft = function turnLeft() {
    direction = (direction + 1) % 4
  };

  this.turnRight = function turnRight() {
    direction = (direction - 1 + 4) % 4
  };

  this.draw = function draw(canvas) {
    canvas.drawPixel(this.x, this.y, new Color(0,1,1));
  }
}
