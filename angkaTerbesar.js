function pasanganTerbesar(num) {
  // you can only write your code here!
  var newStr = num.toString();

  // console.log(newStr[0]+newStr[1]);
  // console.log(newStr[1]+newStr[2]);
  var arrNum = [];
  for (var k = 0; k < newStr.length -1; k++) {
    var angkaPasang = newStr[k]+newStr[k+1];
    arrNum.push(angkaPasang);
  }
  var terbesar = Number(arrNum[0]);
  for (var l = 1; l < arrNum.length; l++) {
    if (terbesar < Number(arrNum[l])){
      terbesar = Number(arrNum[l]);
    }
  }
  // arrNum.sort();
  // console.log(terbesar);
  // return arrNum[arrNum.length -1];
  return terbesar;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99