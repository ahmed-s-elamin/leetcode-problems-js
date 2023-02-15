/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 */
var reverseList = function (head) {
  let prev = null,
    curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev; //next points to prev.

    prev = curr; //advance prev
    curr = next; //advance curr
  }

  return prev;
};
