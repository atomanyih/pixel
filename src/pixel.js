window.onload = function() {
  var canvas = document.getElementById('view');
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, width, height);

  var Guy = function(x, y, color) {
    return {
      draw: function(context) {
        ctx.fillStyle = color;
        context.fillRect(x, y, 1, 1);
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

  var guy = Guy(width/3, height/2, 'rgba(255,255,255,0.1)');

  function main() {
    guy.draw(ctx);
    guy.move();

    window.requestAnimationFrame(main);
  }

  main();
};
