window.onload = function() {
  var canvas = new Canvas('view');
  canvas.fitToWindow();

  //var l = ['F'];
  //var rules = {
  //  'F': ['F', '+', 'F', '-', 'F', '-', 'F', '+', 'F']
  //};

  var l = ['F', 'X'];
  var rules = {
    'X': ['X', '+', 'Y', 'F', '+'],
    'Y': ['-', 'F', 'X', '-', 'Y']
  };

  var system = new Lindenmayer(l, rules);
  l = system.generate(12);

  console.log(l);

  var dude = new Dude(canvas.width/2,100);

  function main() {
    var action = l.pop();
    switch(action) {
      case 'F':
        dude.moveForward();
        dude.draw(canvas);

        dude.moveForward();
        dude.draw(canvas);

        break;
      case '-':
        dude.turnLeft();
        break;
      case '+':
        dude.turnRight();
        break;
    }
    window.requestAnimationFrame(main)
  }

  main();
};
