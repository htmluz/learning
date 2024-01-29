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

  unshift(val) {
    let newhead = new Node(val);
    if (!this.head) {
      this.head = newhead;
      this.tail = this.head;
    } else {
      newhead.next = this.head;
      this.head = newhead;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let temp = this.head;
    while (idx !== count) {
      temp = temp.next;
      count++;
    }
    return temp;
  }

  set(idx, val) {
    let tochange = this.get(idx);
    if (tochange) {
      tochange.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prevnode = this.get(idx);
    let nextnode = prevnode.next;
    prevnode.next = newNode;
    newNode.next = nextnode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    let prev = this.get(idx - 1);
    let temp = this.get(idx);
    prev.next = prev.next.next;
    this.length--;
    return temp.val;
  }

  print() {
    let arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }

  reverse() {
    let node = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(10);
list.push(200);
list.push(2313);
list.push(2121);
list.push(2711);
list.push(2712112);
list.push(22);
list.print();
list.reverse();
list.print();
