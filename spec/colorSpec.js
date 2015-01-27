describe('color', function() {
  describe('toRgb', function() {
    it('returns rgb for red', function() {
      var color = new Color(0,1,1);
      expect(color.toRgb()).toBe('rgb(255,0,0)');
    });

    it('returns rgb for green', function() {
      var color = new Color(120,1,1);
      expect(color.toRgb()).toBe('rgb(0,255,0)');
    });
    it('returns rgb for blue', function() {
      var color = new Color(240,1,1);
      expect(color.toRgb()).toBe('rgb(0,0,255)');
    });
  });

  describe('rotate', function() {
    it('rotates the hue', function() {
      var color = new Color(0,1,1);
      color.rotate();
      expect(color.h).toBe(1);
    });
  })
});
