function targetTerdekat(arr) {
    if(arr.indexOf('x') ===  -1) return 0
    
    var posisiO = arr.indexOf('o')
    var temp = arr.length
    //console.log(temp)
    for(i = 0; i < arr.length; i++){
      if(arr[i] === 'x'){
        var jarak = Math.abs(i-posisiO);
        if(jarak < temp){
          temp = jarak
        }
        }
      }
    
    return temp
  }
  
  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['', '', 'o', ''])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2