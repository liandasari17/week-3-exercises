function palindrome(kata) {
    newKata= '';
    for(var i= kata.length-1; i>=0; i--){
      newKata= newKata+ kata[i];
    }
    if(newKata === kata){
     return true
    }
    if(newKata !== kata){
      return false
    }
}

  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false