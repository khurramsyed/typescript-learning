/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
    Example 1:
    Input: s = "abc", t = "ahbgdc"
    Output: true
    Example 2:
    Input: s = "axc", t = "ahbgdc"
    Output: false
 * @param array 
 * @param sequence 
 * @returns 
 */


export function isValidSubsequence(array: number[], sequence: number[]) {
    // Write your code here.
    let counter =0
    for(let i=0 ; i< array.length; i++){
       if(array[i]==sequence[counter])
         counter++;
    }
    
    if(counter === sequence.length)
      return true;
    return false;
  }