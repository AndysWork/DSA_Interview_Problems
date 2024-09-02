/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.
Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 
6 units of rain water (blue section) are being trapped.
Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

Questions -
1. Right & Left Side of Graph considered? No
2. -ve integers

*/
/*
My Try
let maxTrap = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if (height[j] > height[i]) {
        i = j;
        break;
      } else {
        maxTrap += height[i] - height[j];
      }
    }
  }
  return maxTrap;
*/

//Brute Force
function trapWaterBruteForce(height) {
  let totalWater = 0;

  for (let p = 0; p < height.length; p++) {
    let leftP = p;
    let rightP = p;
    let maxLeft = 0;
    let maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, height[leftP]);
      leftP--;
    }

    while (rightP < height.length) {
      maxRight = Math.max(maxRight, height[rightP]);
      rightP++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - height[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
}

//Optimal Solution
/*
1. Identify the pointer with the lesser value
2. Is this pointer value greater than or equal to max on that side
  yes -> update max on that side
  no -> get water for pointer, add to total
3. move pointer inwards
4. repeat for other pointer
 */
function trapWaterOptimal(height) {
  let left = 0,
    right = height.length - 1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] > maxLeft) {
        maxLeft = height[left];
      } else {
        totalWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] > maxRight) {
        maxRight = height[right];
      } else {
        totalWater += maxRight - height[right];
      }
      right--;
    }
  }
  return totalWater;
}

console.log(trapWaterOptimal([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //6
console.log(trapWaterOptimal([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])); //8
console.log(trapWaterOptimal([4, 2, 0, 3, 2, 5])); //9
console.log(trapWaterOptimal([])); //0
console.log(trapWaterOptimal([3])); //0
console.log(trapWaterOptimal([3, 4, 3])); //0
