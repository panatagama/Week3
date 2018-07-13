var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling() {
  input[1] += 'Elsharawy';
  console.log(input);
  var bln = input[3]

  var splitBln = bln.split('/');
  
  var kata = Number(splitBln[1]);
  var bulan = '';

  switch (kata){
    case 01 :
    bulan = 'Januari'; 
    break;
    case 02 :
    bulan = 'Februari';
    break;
    case 03 :
    bulan = 'Maret';
    break;
    case 04 :
    bulan = 'April';
    break;
    case 05 :
    bulan = 'Mei';
    break;
    case 06 :
    bulan = 'Juni';
    break;
    case 07 :
    bulan = 'Juli';
    break;
    case 08 :
    bulan = 'Agustus';
    break;
    case 09 :
    bulan = 'September';
    break;
    case 10 :
    bulan = 'Oktober';
    break;
    case 11 :
    bulan = 'November';
    break;
    case 12 :
    bulan = 'Desember';
    break;
  };
  console.log(bulan);

  var ubahTgl = splitBln.sort(function(value1, value2) { return Number(value2) - Number(value1); })
  console.log(ubahTgl);

  splitBln = bln.split('/');
  console.log(splitBln.join('-'));

  var nama = input[1].slice(0, 15);
  console.log(nama);
}
dataHandling(input);