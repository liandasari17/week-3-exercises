function pasanganTerbesar(num) {
    var numString= String(num);
    var tampung= " ";
    var nilaiAwal= "0";
    for(var i= 0; i<numString.length-1 ; i++){
    tampung= numString[i]+ numString[i+1]
    if(tampung > nilaiAwal){
      nilaiAwal = tampung
    }
    }
    return nilaiAwal
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  