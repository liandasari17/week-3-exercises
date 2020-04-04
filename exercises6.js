function angkaPalindrome(num) {
    for(i=0; i<num; i++){
      num= num+ 1;
      var numString= String(num);
  
      var string= '';
      for(j=numString.length-1; j>=0; j--){
        string= string+ numString[j];
      }
      if(numString === string) {
        return num;
      }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001