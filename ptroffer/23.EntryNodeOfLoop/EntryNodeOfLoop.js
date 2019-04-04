// 题目描述
// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。


function ListNode(x){
    this.val = x;
    this.next = null;
}

//思路一：快慢指针：

//确定是否有环：一个指针走一步，一个指针走两步；指针相遇则有环，且相遇的节点在环中；快指针的下一个节点为空则不存在环

//确定环中节点的个数：从快慢指针相遇的结点开始计数，回到当前节点的的个数即为环中节点的个数

//确定入口节点：快指针先走环中节点个数步，快慢指针同时出发，相遇节点即为环的入口节点

function EntryNodeOfLoop(pHead)
{
    if (pHead == null || pHead.next== null) {
        return null;
    }

    //fast and slow

    let slow = pHead, fast = pHead;

    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow.val == fast.val) {
            break;
        }
    }

    //node 

    let p1 = pHead;
    let p2 = slow;

    while (p1 != p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}