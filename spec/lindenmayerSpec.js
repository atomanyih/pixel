describe('lindenmayer', function() {
  describe('generate', function() {
    it('returns result after n steps', function() {
      var start = ['A'];
      var rules = {'A': ['B', 'A']};
      var l = new Lindenmayer(start, rules, 5);

      expect(l.generate()).toEqual(['B', 'B', 'B', 'B', 'B', 'A']);
    });
  });

});

describe('dude', function() {
  it('moves forward', function() {
    var dude = new Dude(0, 0);

    dude.moveForward();

    expect(dude.x).toEqual(0);
    expect(dude.y).toEqual(1);
  });

  it('turns left', function() {
    var dude = new Dude(0, 0);

    dude.turnLeft();
    dude.moveForward();

    expect(dude.x).toEqual(1);
    expect(dude.y).toEqual(0);
  });

  it('turns right', function() {
    var dude = new Dude(0, 0);

    dude.turnRight();
    dude.moveForward();

    expect(dude.x).toEqual(-1);
    expect(dude.y).toEqual(0);
  })
});
