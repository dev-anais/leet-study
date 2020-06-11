/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * refer to https://leetcode.com/problems/reverse-nodes-in-k-group/discuss/11486/Beautiful-JavaScript-Code
 */
var reverseKGroup = function (head, k) {
    let stack = []
    let preHead = new ListNode()
    preHead.next = head
    let lastTail = preHead

    while (head) {
        for (var i = 0; i < k && head; i++) {
            stack.push(head)
            head = head.next
        }
        if (stack.length == k) {
            while (stack.length > 0) {
                lastTail.next = stack.pop()
                lastTail = lastTail.next
            }
            lastTail.next = head
        }
    }
    return preHead.next
};