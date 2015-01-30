describe('langton', function() {
  describe('move', function() {
    beforeEach(function() {
      this.canvas = new Canvas('test-canvas');
      this.canvas.clear();

      this.ant = new Langton(1,1);
    });

    describe('on transparent', function() {
      it('turns right and moves forward', function() {
        this.ant.move(this.canvas);
        expect(this.ant.x).toEqual(0);
        expect(this.ant.y).toEqual(1);
      });

      it('flips the color', function() {
        this.ant.move(this.canvas);
        expect(this.canvas.alphaAt(1,1)).toEqual(1);
      });
    });

    describe('on opaque', function() {
      beforeEach(function() {
        this.canvas.drawPixel(1,1);
      });

      it('turns left and moves forward', function() {
        this.ant.move(this.canvas);
        expect(this.ant.x).toEqual(2);
        expect(this.ant.y).toEqual(1);
      });

      it('flips the color', function() {
        this.ant.move(this.canvas);
        expect(this.canvas.alphaAt(1,1)).toEqual(0);
      });
    });
  });
});
