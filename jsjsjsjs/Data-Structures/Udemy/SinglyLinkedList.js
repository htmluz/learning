class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    this.length++;
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let curr = this.head;
    let newt = curr;
    while (curr.next) {
      newt = curr;
      curr = curr.next;
    }
    newt.next = null;
    this.tail = newt;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    return temp;
  }
}

let list = new SinglyLinkedList();
list.push(10);
list.push(200);
list.push(2313);
list.push(2121);
console.log(list.shift());
console.log(list);
