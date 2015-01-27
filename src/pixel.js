window.onload = function() {
  var canvas = new Canvas('view');

  var Guy = function(x, y) {
    return {
      draw: function(canvas) {
        canvas.drawPixel(x, y);
      },
      move: function() {
        var r = Math.random();
        if (r < 0.25) {
          x++;
        } else if (r < 0.5) {
          y++;
        } else if (r < 0.75) {
          x--;
        } else {
          y--;
        }
      }
    }
  };

  var guy = Guy(100, 100);

  function main() {
    guy.draw(canvas);
    guy.move();

    window.requestAnimationFrame(main);
  }

  main();
};
