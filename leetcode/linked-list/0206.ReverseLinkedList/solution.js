// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 头插法

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let newHead = new ListNode(0);

    while (head) {
        let insert = new ListNode(head.val);
        insert.next = newHead.next;
        newHead.next = insert;
        head = head.next;
    }

    return newHead.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 头插法优化

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListOptmization = function (head) {

    let newHead = new ListNode(0);

    while (head) {
        let insert = head;
        head = head.next;
        insert.next = newHead.next;
        newHead.next = insert;
    }

    return newHead.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 迭代

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListOptmization1 = function (head) {

    let prev = null;

    while (head) {
        let curr = head;
        head = head.next;
        curr.next = prev;
        prev = curr;
    }

    return prev;
};

// 递归

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseList = function (head) {

    if (!head || !head.next) {
        return head;
    }

    let newHead = reverseList(head.next);

    head.next.next = head;
    head.next = null;

    return newHead;
};