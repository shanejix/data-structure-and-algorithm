class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.head = null;
  }

  // 入栈
  push(item) {
    if (this.top) {
      this.top.next = item;
      this.top = this.top.next;
    } else {
      this.head = item;
      this.top = item;
    }
  }

  // 出栈
  pop() {
    if (!this.head || !this.top) {
      return null;
    } else {
      let tempNode = this.top;

      this.top = this.findPreNode(this.head, this.top);
      return tempNode;
    }
  }

  // 大小
  size() {
    let num = 0;
    let newHead = this.head;
    while (newHead && newHead.value) {
      num++;
      if (newHead.value === this.top.value) {
        break;
      }
      newHead = newHead.next;
    }
    return num;
  }

  // 找到目标节点的前一个节点
  findPreNode(item, target) {
    let newHead = item;
    while (newHead && newHead.next) {
      if (newHead.next.value === target.value) {
        return newHead;
      }
      newHead = newHead.next;
    }
    return null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);

const stack = new Stack();

stack.push(node1);
stack.push(node2);
console.log('length', stack.size());
console.log('pop item', stack.pop());
console.log('length', stack.size());
