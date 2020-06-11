/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * refer to https://leetcode.com/problems/merge-two-sorted-lists/discuss/167585/javascript-clean-solution
 */
var mergeTwoLists = function (l1, l2) {
    var res = new ListNode()
    var cur = res
    while (l1 && l2) {
        if (l1.val > l2.val) {
            cur.next = new ListNode(l2.val)
            l2 = l2.next
            cur = cur.next
        } else {
            cur.next = new ListNode(l1.val)
            l1 = l1.next
            cur = cur.next
        }
    }
    cur.next = l1 || l2
    return res.next
};