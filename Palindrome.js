/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing 
all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters 
and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 
Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

//Brute Force
function isValidPalindromeBruteForce_MyVersion(s) {
  const result = [];
  for (const ch of s) {
    if (/^([A-Za-z0-9])/.test(ch)) {
      result.push(ch.toLowerCase());
    }
  }
  return result.length === 0 || result.join("") === result.reverse().join("");
}

function isValidPalindromeBruteForce_2PointerFromOutside(s) { // Best Case Scenario - ~55ms
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  // initialize left/right pointers at start and end of string respectively
  let left = 0;
  let right = s.length - 1;

  // loop through string characters while comparing them, then move the pointers closer to the center
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function isValidPalindromeBruteForce_2PointerFromCenter(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
  let left = Math.floor(s.length / 2);
  let right = left;
  // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
  if (s.length % 2 === 0) {
    left--;
  }
  // loop through the string while expanding pointers outwards comparing the characters.
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      return false;
    }
    left--;
    right++;
  }
  return true;
}

function isValidPalindromeBruteForce_CompareAgainstReverse(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let rev = "";

  // generate a reverse string using a reverse for loop.
  for (let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }

  return rev === s;
}

console.log(isValidPalindromeBruteForce("A man, a plan, a canal: Panama")); //true
console.log(isValidPalindromeBruteForce("race a car")); //false
console.log(isValidPalindromeBruteForce(" ")); // true
console.log(isValidPalindromeBruteForce("0P")); // false
