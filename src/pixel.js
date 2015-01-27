window.onload = function() {
  var canvas = new Canvas('view');

  var Guy = function(x, y, color) {
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
      }
    }
  };

  function randomInt(max) {
    return Math.floor(Math.random()*max);
  }

  var baseHue = randomInt(360);

  var colorFunctions = [
    function randomHue() {
      var hue = randomInt(360);
      return new Color(hue,Math.random(),1);
    },
    function randomGreyscale() {
      return new Color(0,0,Math.random());
    },
    function randomBlackAndWhite() {
      return new Color(0,0,randomInt(2));
    },
    function randomMonochrome() {
      return new Color(baseHue,Math.random(),Math.random());
    },
    function randomShades() {
      return new Color(baseHue,1,Math.random());
    }
  ];

  var colorFunction = colorFunctions[randomInt(colorFunctions.length)];

  var ppl = [];
  for(var i = 0; i < 50; i++) {
    var color = colorFunction();
    ppl.push(Guy(canvas.width/2, 100, color))
  }

  function animate(loopFn) {
    window.requestAnimationFrame(loopFn);
    //setInterval(loopFn, 1)
  }

  function main() {
    //canvas.clear();
    ppl.forEach(function(person) {
      person.move();
      person.draw(canvas);
    });

    animate(main);
  }

  animate(main);
};
