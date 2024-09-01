/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the 
ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104

Questions?
1. Thickness of the line is affecting the calculation? - No
2. Any graph sides are not considerable
3. Higher line inside the container doesn't affect the area
*/

//BruteForce Solution
function maxAreaBruteForce(height) {
  let maxArea = 0;
  let calculateArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      calculateArea =
        height[i] < height[j] ? height[i] * (j - i) : height[j] * (j - i);
      if (calculateArea > maxArea) {
        maxArea = calculateArea;
      } else {
        calculateArea = 0;
      }
    }
  }
  return maxArea;
}

//Optimal Solution
function maxAreaOptimal(heights) {
  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
}

console.log(maxAreaOptimal([7, 1, 2, 3, 9])); //7*4 = 28
console.log(maxAreaOptimal([])); //0
console.log(maxAreaOptimal([7])); //0
console.log(maxAreaOptimal([6, 9, 3, 4, 5, 8])); //8*4 = 32
