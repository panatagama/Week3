function palindrome(kata) {
  // you can only write your code here!
  var pldrm = '';
  for (var i = kata.length -1; i >= 0; i--) {
    pldrm += kata[i];
  }
  if (pldrm === kata){
    return true;
  } else {
    return false;
  }
  // return pldrm;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false