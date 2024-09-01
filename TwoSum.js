/*
Given an array of integers, return the indices of the two numbers that add up to a given target.
Input Array - [1,3,7,9,2], Sum - 11

Output index array - [3,4]
Constraints -
1. All numbers are +ve
2. No duplicate array elements
3. For no pair of index, return null
4. Only 1 pair of numbers can be available
*/

//Brute Force Solution
function twoSumBruteForce(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return [i, j];
      }
    }
  }
  return null;
}

//Optimal Solution
function twoSumOptimal(array, sum) {
  const numMap = {};
  for (let i = 0; i < array.length; i++) {
    if (numMap[array[i]] >= 0) {
      return [numMap[array[i]], i];
    }
    numMap[sum - array[i]] = i;
  }
  return null;
}

//TestCases
console.log(twoSumOptimal([1, 3, 7, 9, 2], 11));
console.log(twoSumOptimal([1, 3, 7, 9, 2], 25));
console.log(twoSumOptimal([], 1));
console.log(twoSumOptimal([5], 5));
console.log(twoSumOptimal([1, 6], 7));
