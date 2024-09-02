/* 
Given two strings s and t, return true if they are equal when both are typed into empty text editors. 
'#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 
Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
*/

//Brute Force Approach

function isTypedOutBruteForce(s, t) {
  return (
    generateTypedString(s.split("")).join("") ===
    generateTypedString(t.split("")).join("")
  );
}

function generateTypedString(str) {
  let result = [];
  for (let s of str) {
    if (s === "#") {
      result.pop();
    } else {
      result.push(s);
    }
  }
  return result;
}

// Optimal Solution
function isTypedOutOptimal(S, T) {
  let p1 = S.length - 1,
    p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (S[p1] === "#") {
            backCount += 2;
          }
        }
      }
      if (T[p2] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (T[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }

  return true;
}

console.log(isTypedOutOptimal("ab#c", "ad#c")); //true
console.log(isTypedOutOptimal("ab##", "c#d#")); //true
console.log(isTypedOutOptimal("a#c", "b")); //false
console.log(isTypedOutOptimal("x#y#z#", "b#")); //true
console.log(isTypedOutOptimal("a###b", "b")); //true
console.log(isTypedOutOptimal("Ab#z", "ab#z")); //false
