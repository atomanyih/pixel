function Lindenmayer(start, rules, depth) {
  var state = start;

  function advance(state, rules) {
    var nextState = [];

    state.forEach(function(item) {
      var replacement = rules[item] || item;
      nextState = nextState.concat(replacement);
    });

    return nextState;
  }

  this.generate = function generate() {
    var nextState = state;

    for(var i = 0; i < depth; i++) {
      nextState = advance(nextState, rules);
    }

    return nextState
  };
}

Lindenmayer.dragonCurve = function() {
  var start = ['F', 'X'];
  var rules = {
    'X': ['X', '+', 'Y', 'F', '+'],
    'Y': ['-', 'F', 'X', '-', 'Y']
  };

  return new Lindenmayer(start, rules, 12);
};

Lindenmayer.kochCurve = function() {
  var start = ['F'];
  var rules = {
    'F': ['F', '+', 'F', '-', 'F', '-', 'F', '+', 'F']
  };

  return new Lindenmayer(start, rules, 5);
};

Lindenmayer.hilbertCurve = function() {
  var start = ['A'];
  var rules = {
    'A': ['-','B','F','+','A','F','A','+','F','B','-'],
    'B': ['+','A','F','-','B','F','B','-','F','A','+']
  };

  return new Lindenmayer(start, rules, 7);
};

Lindenmayer.carpet = function() {
  var start = ['F','+','F','+','F','+','F'];
  var rules = {
    'F': ['F', 'F', '+', 'F', '+', 'F', '+', 'F', '+', 'F', 'F']
  };

  return new Lindenmayer(start, rules, 4);
};

Lindenmayer.thing = function() {
  var start = ['F','+','F','+','F','+','F'];
  var rules = {
    'F': ['F','F','+','F','+','F','+','F','+','F','+','F','-','F']
  };

  return new Lindenmayer(start, rules, 4);
}

Lindenmayer.something = function() {
  var start = ['F'];
  var rules = {
    'F': ['F','+','F','-','F','-','F','-','G','+','F','+','F','+','F','-','F'],
    'G': ['G','G','G']
  };

  return new Lindenmayer(start, rules, 4);
};

function Dude(x, y) {
  this.x = x;
  this.y = y;
  this.color = new Color(0,1,1);

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
    canvas.drawPixel(this.x, this.y, this.color);
  }
}
