describe('canvas', function() {
  describe('drawPixel', function() {
    it('draws a 1x1 rect at the desired position', function() {
      var canvasElement = document.getElementById('test-canvas');
      var context = jasmine.createSpyObj('context', ['fillRect', 'fillStyle']);

      spyOn(canvasElement, 'getContext').and.returnValue(context);

      var canvas = new Canvas('test-canvas');
      canvas.drawPixel(0,1);

      expect(context.fillRect).toHaveBeenCalledWith(0,1,1,1);
    })
  });

  describe('clear', function() {
    it('clears the whole canvas', function() {
      var canvasElement = document.getElementById('test-canvas');
      var context = jasmine.createSpyObj('context', ['clearRect']);

      spyOn(canvasElement, 'getContext').and.returnValue(context);

      var canvas = new Canvas('test-canvas');
      canvas.clear();

      expect(context.clearRect).toHaveBeenCalledWith(0,0,100,100);
    });
  });

  describe('surroundings', function() {
    beforeEach(function() {
      this.canvas = new Canvas('test-canvas');

      this.canvas.clear();
    });

    it('detects left and right', function() {
      // - - -
      // x o x
      // - - -
      this.canvas.drawPixel(0,1);
      this.canvas.drawPixel(2,1);

      var surroundings = this.canvas.surroundings(1,1);

      expect(surroundings.left).toBe(0);
      expect(surroundings.right).toBe(0);
      expect(surroundings.up).toBe(1);
      expect(surroundings.down).toBe(1);
    });

    it('detects up and down', function() {
      // - x -
      // - o -
      // - x -

      this.canvas.drawPixel(1,0);
      this.canvas.drawPixel(1,2);

      var surroundings = this.canvas.surroundings(1,1);

      expect(surroundings.left).toBe(1);
      expect(surroundings.right).toBe(1);
      expect(surroundings.up).toBe(0);
      expect(surroundings.down).toBe(0);
    });

    xit('?', function() {
      // o - -
      // - - -
      // - - -

      var surroundings = this.canvas.surroundings(0,0);

      expect(surroundings.left).toBe(1);
      expect(surroundings.right).toBe(1);
      expect(surroundings.up).toBe(1);
      expect(surroundings.down).toBe(0);
    });
  });
});
