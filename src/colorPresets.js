var baseHue = randomInt(360);

function randomHue() {
  var hue = randomInt(360);
  return new Color(hue,Math.random(),1);
}

function randomGreyscale() {
  return new Color(0,0,Math.random());
}

function randomBlackAndWhite() {
  return new Color(0,0,randomInt(2));
}

function randomMonochrome() {
  return new Color(baseHue,Math.random(),Math.random());
}

function randomShades() {
  return new Color(baseHue,1,Math.random());
}

var colorFunctions = [
  randomHue,
  randomGreyscale,
  randomBlackAndWhite,
  randomMonochrome,
  randomShades
];
