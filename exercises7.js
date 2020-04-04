function hitungJumlahKata(kalimat) {
  var arr= []
  var temp= ''
  kalimat= kalimat + ' '
    for(i=0; i<kalimat.length; i++){
      if(kalimat[i] !== ' '){
        temp= temp + kalimat[i]
      } else if(kalimat[i]=== ' ' && temp.length > 0){
        arr.push(temp)
        temp= ' '
      }
    }
    return arr.length
  }


  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5