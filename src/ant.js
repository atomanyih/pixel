function ant() {
  var canvas = new Canvas('view');
  canvas.fitToWindow();

  var ants;

  function init() {
    canvas.clear();
    canvas.setKaleidoscope(4);

    ants = [];

    var x = Math.floor(canvas.width / 2);
    var y = Math.floor(canvas.height / 2)+100;
    //ants.unshift(new Langton(x+20, y));
    ants.unshift(new Langton(x, y));
    //ants.unshift(new Langton(x-20, y));
  }

  function main() {
    ants.forEach(function(ant) {
      ant.move(canvas)
    });
    //window.requestAnimationFrame(main)
    setTimeout(main, 1);
  }

  init();
  main();
}
