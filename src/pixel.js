window.onload = function() {
  var canvas = new Canvas('view');

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

  var ppl = [];
  for(var i = 0; i < 50; i++) {
    var color = colorFunction();
    ppl.push(Guy(canvas.width/2, 100, color, evolutionFunction))
  }

  function animate(loopFn) {
    window.requestAnimationFrame(loopFn);
    //setInterval(loopFn, 1)
  }

  function main() {
    //canvas.clear();
    ppl.forEach(function(person) {
      person.move();
      person.evolve();
      person.draw(canvas);
    });

    animate(main);
  }

  animate(main);
};
