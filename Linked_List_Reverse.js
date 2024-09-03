/* 
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list 
from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
1. m & n always within the bounds? 1<= m <= n <= length of the linked list
2. Can we recieve m=1 and n=whole linked list? Yes, so it will be a reverse of whole linked list
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

//Brute Force
function reverseLLBruteForce(head, m, n) {
  let currentPos = 1;
  let currentNode = head;
  let start = head;

  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }
  let newList = null;
  let tail = currentNode;

  while (currentPos >= m && currentPos <= n) {
    let nextTemp = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = nextTemp;
    currentPos++;
  }
  start.next = newList;
  tail.next = currentNode;

  return m > 1 ? head : newList;
}

printList(linkedList);
console.log("after reverse");
printList(reverseLLBruteForce(linkedList, 2, 4));

// console.log(reverseLLBruteForce([1, 2, 3, 4, 5], 2, 4)); // [1,4,3,2,5]
// console.log(reverseLLBruteForce([5], 1, 1)); // [5]
// console.log(reverseLLBruteForce([1, 2, 3, 4, 5], 1, 5)); // [1,2,3,4,5]
// console.log(reverseLLBruteForce(null, 0, 0));
