function randomInt(max) {
  return Math.floor(Math.random()*max);
}

function sampleArray(array) {
  return array[randomInt(array.length)]
}
