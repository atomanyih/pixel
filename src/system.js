window.onload = function() {
  var canvas = new Canvas('view');
  canvas.fitToWindow();

  var system = (sampleArray(
    [
      Lindenmayer.dragonCurve,
      Lindenmayer.kochCurve,
      Lindenmayer.hilbertCurve,
      Lindenmayer.carpet,
      Lindenmayer.thing,
      Lindenmayer.something
    ]
  ))();

  var l = system.generate();

  console.log(l);

  var dude = new Dude(canvas.width / 2, 100);
  dude.draw(canvas);

  function main() {
    var action = l.pop();
    switch (action) {
      case 'F':
        dude.moveForward();
        dude.draw(canvas);

        dude.moveForward();
        dude.draw(canvas);

        dude.color.rotate();
        break;
      case '-':
        dude.turnLeft();
        break;
      case '+':
        dude.turnRight();
        break;
    }
    //window.requestAnimationFrame(main)
    setTimeout(main, 1);
  }

  main();
};
