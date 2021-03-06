function Color(h,s,v){
  this.h = h;
  this.s = s;
  this.v = v;

  this.toRgb = function() {
    var chroma = this.v * this.s;
    var hextant = this.h / 60;
    var x = chroma * (1 - Math.abs(hextant % 2 - 1));
    var m = this.v - chroma;

    var r, g, b;
    switch (Math.floor(hextant)) {
      case 0:
        r = chroma;
        g = x;
        b = 0;
        break;
      case 1:
        r = x;
        g = chroma;
        b = 0;
        break;
      case 2:
        r = 0;
        g = chroma;
        b = x;
        break;
      case 3:
        r = 0;
        g = x;
        b = chroma;
        break;
      case 4:
        r = x;
        g = 0;
        b = chroma;
        break;
      case 5:
        r = chroma;
        g = 0;
        b = x;
        break;
      default:
        r = 0;
        g = 0;
        b = 0;
        break;
    }

    r = r+m;
    g = g+m;
    b = b+m;

    r = Math.floor(255*r);
    g = Math.floor(255*g);
    b = Math.floor(255*b);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

  this.rotate = function() {
    this.h = (this.h + 0.2)%360;
  };

  this.desaturate = function() {
    if(this.s > 0){
      this.s = (this.s - 0.001);
    } else {
      this.s = 0;
    }
  };

  this.darken = function() {
    if(this.v > 0){
      this.v = (this.v - 0.001);
    } else {
      this.v = 0;
    }
  };
}
