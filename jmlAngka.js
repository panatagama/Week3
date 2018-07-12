function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var arrKata = [];
  var spltKata = kalimat.split(' ');
  arrKata.push(spltKata);
  // console.log(arrKata);
  return arrKata[0].length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5