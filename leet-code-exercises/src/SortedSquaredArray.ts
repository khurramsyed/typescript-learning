/**
 * Time Complexity O(n log(n)) --> That is what sort guaratees at max
 * Space complexity O(n) --> One array for squared numbers
 * @param array 
 * @returns 
 */
function bruteForce(array: number[]) {
    // Write your code here.
    let result: number[] = [];
    for (let i=0;i<array.length; i++) {
      result[i]= (array[i]* array[i]);
    }

    return result.sort((a,b) => {return a-b;});
  }


/**
 * Time complexity = O(n) as we are moving one time linerarly with the array size
 * Space complexity = O(n) as we are storing one array to store squared numbers.
 * @param array 
 * @returns 
 */
function sortedSquaredArray(array: number[]) {
    let start=0;
    let end = array.length-1;
    let result = Array(array.length).fill(0);
    const END= end;
    let counter = 0;
    console.log(array)
    while(counter<= END){
      if( Math.abs(array[end]) > Math.abs(array[start]) ){
        result[END-counter] =  array[end]* array[end];
        end--;
      }
      else{
        result[END-counter] = array[start]* array[start];
        start++;
      }
      counter++;
    }
    return result;
  }
  
  
  