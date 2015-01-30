function system() {
  var canvas = new Canvas('view');
  canvas.fitToWindow();

  var l, system, dude;

  function init() {
    //canvas.clear();
    canvas.fade();
    canvas.fade();
    canvas.fade();
    canvas.setKaleidoscope(4 + randomInt(4));

    system = (sampleArray(
      [
        Lindenmayer.dragonCurve,
        Lindenmayer.kochCurve,
        Lindenmayer.hilbertCurve,
        Lindenmayer.carpet,
        Lindenmayer.thing,
        Lindenmayer.something
      ]
    ))();

    l = system.generate();

    console.log(l);

    dude = new Dude(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2));
    dude.draw(canvas);
  }

  function main() {
    var action = l.pop();
    switch (action) {
      case 'F':
        dude.moveForward();
        dude.draw(canvas);

        dude.moveForward();
        dude.draw(canvas);

        dude.evolve();
        break;
      case '-':
        dude.turnLeft();
        break;
      case '+':
        dude.turnRight();
        break;
      case undefined:
        init();
        break;
    }
    //window.requestAnimationFrame(main)
    setTimeout(main, 1);
  }

  init();
  main();
}
