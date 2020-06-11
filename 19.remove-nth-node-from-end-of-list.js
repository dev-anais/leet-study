/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * refer to https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/9112/Javascript-Solution
 */
var removeNthFromEnd = function (head, n) {
    var nullHead = new ListNode
    var p1 = nullHead
    var p2 = nullHead
    nullHead.next = head;
    for (var i = 0; i < n + 1; i++) {
        p1 = p1.next
    }
    while (p1 !== null) {
        p2 = p2.next
        p1 = p1.next
    }
    p2.next = p2.next.next
    return nullHead.next
};
