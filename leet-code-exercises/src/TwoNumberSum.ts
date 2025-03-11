function twoNumberSum(array: number[], targetSum: number) {
    let result: number[] =  []
    for( let i =0 ; i< array.length-1; i++){
      for( let j=1; j< array.length; j++){
        if( i!==j && (array[i] + array[j] === targetSum)){
          result.push(array[i]);
          result.push(array[j]);
          break;
        }
      }
      if(result.length >0)
        break;
    }
    console.log(result);
    return result;
  }


  function twoNumberSum1(array: number[], targetSum: number) {
    // Write your code here.
    let potentialSolutions: Map<number, string> =  new  Map<number, string>();
    
    for(const num of array){
      let potentialMatch = targetSum - num;
      console.log(potentialMatch)
      if(potentialSolutions.has(potentialMatch)){
        return [num,potentialMatch];
      }
      
      potentialSolutions.set(num , "Does not matter")
      console.log(potentialSolutions)
    }
    
    return [];
  }
  
  let answer = twoNumberSum1([3,5,-4,8,11,1,-1,6], 10)
  console.log(`Answer is ${answer}`)