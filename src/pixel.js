function pixel() {
  var canvas = new Canvas('view');
  canvas.fitToWindow();

  function Guy(x, y, color, evolveFunction) {
    this.x = x;
    this.y = y;

    this.draw = function(canvas) {
      canvas.drawPixel(this.x, this.y, color);
    };
    this.move = function() {
      var surroundings = canvas.surroundings(this.x, this.y);

      var r = Math.random() * (surroundings.left + surroundings.right + surroundings.up + surroundings.down);

      if (r < surroundings.left) {
        this.x--;
      } else if (r < surroundings.left + surroundings.right) {
        this.x++;
      } else if (r < surroundings.left + surroundings.right + surroundings.up) {
        this.y--;
      } else {
        this.y++;
      }
    };
    this.evolve = function() {
      evolveFunction(color);
    };
  }

  var ppl;

  function init() {
    baseHue = randomInt(360);
    canvas.clear();
    canvas.setKaleidoscope(1 + randomInt(7));
    canvas.drawCircle();

    var colorFunction = sampleArray(colorFunctions);

    var evolutionFunction = sampleArray(evolutionFunctions);

    var numGuys = 50;//randomInt(50) + 3;

    console.log(colorFunction.name, evolutionFunction.name, numGuys);

    ppl = [];
    for (var i = 0; i < numGuys; i++) {
      var color = colorFunction();
      var guy = new Guy(canvas.width / 2, 100, color, evolutionFunction);
      ppl.push(guy);
      //ppl.push(Guy(canvas.width/2+i - numGuys/2, canvas.height/2, color, evolutionFunction))
    }
  }

  function main() {
    ppl.forEach(function(person) {
      person.move();
      person.evolve();
      person.draw(canvas);

      if (person.y > canvas.height) {
        restart();
      }
    });

    window.requestAnimationFrame(main);
  }

  function restart() {
    init();
  }

  init();
  main();
}
