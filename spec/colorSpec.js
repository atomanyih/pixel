describe('color', function() {
  describe('hsv', function() {
    it('returns rgb for the hsv value', function() {
      expect(Color.hsv(0,1,1)).toBe('rgb(255,0,0)');
      expect(Color.hsv(120,1,1)).toBe('rgb(0,255,0)');
      expect(Color.hsv(240,1,1)).toBe('rgb(0,0,255)');
    });
  });
});
