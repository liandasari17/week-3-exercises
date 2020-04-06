function groupAnimals(animals) {
    var result = []
    for(i=0; i<animals.length; i++){
      var check= false
      for(j=0; j<result.length; j++){
        //console.log(result[j][0][0])
        if(result[j][0][0] === animals[i][0]){
          result[j].push(animals[i])
          check = true
        }
      }
      if(check === false){
        result.push([animals[i]])
      }
      //console.log(i)
    }
    for(i=0; i<result.length; i++){
      for(j=i+1; j< result.length; j++){
        if(result[i][0][0] > result[j][0][0]){
          var temp= result[i]
          result[i] = result[j]
          result[j] = temp
        }
      }
    }
    return result 
 }
 // TEST CASES
 console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
 // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
 console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]