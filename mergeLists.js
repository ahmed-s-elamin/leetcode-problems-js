/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  while (l1 && l2) {
    const l2Greater = l1.val <= l2.val;
    const l2Less = l2.val <= l1.val;

    if (l2Greater) {
      l1.next = mergeTwoLists(l1.next, l2);

      return l1;
    }

    if (l2Less) {
      l2.next = mergeTwoLists(l1, l2.next);

      return l2;
    }
  }
};
