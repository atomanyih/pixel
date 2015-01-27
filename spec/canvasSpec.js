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
});
