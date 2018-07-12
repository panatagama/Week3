function angkaPalindrome(num) {
  // you can only write your code here!
  var found = false;

  while (found === false) {
    num += 1
    var str = num.toString()
    var balikStr = '';
    for (var j = str.length -1; j >= 0; j--) {
      balikStr += str[j];
    } 
    if (str === balikStr) {
      found = true;
    } else {
      found = false;
    }
  }
  return balikStr;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001