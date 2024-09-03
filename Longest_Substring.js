/* 
Given a string s, find the length of the longest substring without repeating characters.
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
Is the string contiguous? Yes (Look for Substring not Subsequence)
*/

//Brute Force
function longestSubstringBruteForce(s) {
  if (s.length <= 1) return s.length;

  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    const seenChars = {};
    let currentLength = 0;

    for (let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if (seenChars[currentChar]) {
        break;
      } else {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      }
    }
  }

  return longest;
}

//Optimal
function longestSubstringOptimal(s) {
  if (s.length <= 1) return s.length;
  let longest = 0;
  let charmap = {};
  let leftP = 0;

  for (let rightP = 0; rightP < s.length; rightP++) {
    const currentChar = s[rightP];
    const prevSeenChar = charmap[currentChar];
    if (prevSeenChar >= leftP) {
      leftP = prevSeenChar + 1;
    }
    charmap[currentChar] = rightP;
    longest = Math.max(longest, rightP - leftP + 1);
  }
  return longest;
}

//More Optimal

function longestSubstringMoreOptimal(s) {
  let map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(longestSubstringOptimal("abcabcbb")); //abc - 3
console.log(longestSubstringOptimal("bbbbb")); //b - 1
console.log(longestSubstringOptimal("pwwkew")); //wke - 3
console.log(longestSubstringOptimal(" ")); //" " - 1
