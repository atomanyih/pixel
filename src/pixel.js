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

  var ppl = [];

  function randomColor() {
    var hue = randomInt(360);
    return Color.hsv(hue,Math.random(),1);
    //return Color.hsv(0,0,Math.random());
  }

  for(var i = 0; i < 50; i++) {
    var color = randomColor();
    ppl.push(Guy(100, 100, color))
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
