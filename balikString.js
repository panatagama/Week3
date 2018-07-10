var kata = ('hello world!');
function balikString(word) {
  var mirror = [''];
  for (var i = word.length -1; i >= 0; i--) {
    mirror += word[i];
  }
  return mirror;
}
console.log(balikString(kata));