/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

function isValidParentheses(s) {
  const parenthesesMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  if (s.length === 0) return false;
  const stack = [];
  for (const element of s) {
    if (parenthesesMap[element]) {
      stack.push(element);
    } else {
      const leftBracket = stack.pop();
      if (parenthesesMap[leftBracket] !== element) return false;
    }
  }
  return stack.length === 0;
}

console.log(isValidParentheses("()")); //true
console.log(isValidParentheses("()[]{}")); //true
console.log(isValidParentheses("(]")); //false
console.log(isValidParentheses("([])")); //true
console.log(isValidParentheses("")); //false
console.log(isValidParentheses("{[(])}")); //false
console.log(isValidParentheses("{[]()}")); //true
