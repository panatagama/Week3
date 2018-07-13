function groupAnimals(animals) {
  // you can only write your code here!
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  var newArr = []
  for (var i = 0; i < abjad.length; i++) {
    var arr1 = []
    for (var j = 0; j < animals.length; j++) {
      if (animals[j][0] === abjad[i]) {
          arr1.push(animals[j]);
      }
    }
    if (arr1.length !== 0) {
       newArr.push(arr1);
    }
  }
  return newArr;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]