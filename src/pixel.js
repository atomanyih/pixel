window.onload = function() {
  var canvas = new Canvas('view');
  canvas.fitToWindow();
  canvas.drawCircle();

  var Guy = function(x, y, color, evolveFunction) {
    return {
      draw: function(canvas) {
        canvas.drawPixel(x, y, color);
      },
      move: function() {
        var surroundings = canvas.surroundings(x,y);

        var r = Math.random() * (surroundings.left + surroundings.right + surroundings.up + surroundings.down);

        if (r < surroundings.left) {
          x--;
        } else if (r < surroundings.left + surroundings.right) {
          x++;
        } else if (r < surroundings.left + surroundings.right + surroundings.up) {
          y--;
        } else {
          y++;
        }
      },
      evolve: function() {
        evolveFunction(color);
      }
    }
  };

  var colorFunction = sampleArray(colorFunctions);

  var evolutionFunction = sampleArray(evolutionFunctions);

  var numGuys = 50;//randomInt(50) + 3;

  console.log(colorFunction.name, evolutionFunction.name, numGuys);

  var ppl = [];
  for(var i = 0; i < numGuys; i++) {
    var color = colorFunction();
    ppl.push(Guy(canvas.width/2, 100, color, evolutionFunction))
  }

  function main() {
    ppl.forEach(function(person) {
      person.move();
      person.evolve();
      person.draw(canvas);
    });

    window.requestAnimationFrame(main);
  }

  window.requestAnimationFrame(main);
};
