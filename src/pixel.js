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

  var guy = Guy(100, 100, 'rgba(0,0,0,.2)');
  var redGuy = Guy(100, 100, 'rgba(255,0,0,.2)');

  function animate(loopFn) {
    window.requestAnimationFrame(loopFn);
    //setInterval(loopFn, 1)
  }

  function main() {
    guy.draw(canvas);
    guy.move();
    redGuy.draw(canvas);
    redGuy.move();

    animate(main);
  }

  animate(main);
};
