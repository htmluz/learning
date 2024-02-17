class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }
    this.head = temp.next;
    this.head.prev = null;
    temp.next = null;
    return temp;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx <= Math.floor(this.length / 2)) {
      let i = 0;
      let temp = this.head;
      while (idx != i) {
        temp = temp.next;
        i++;
      }
      return temp;
    }
    if (idx >= Math.floor(this.length / 2)) {
      let i = this.length - 1;
      let temp = this.tail;
      while (idx != i) {
        temp = temp.prev;
        i--;
      }
      return temp;
    }
  }

  set(idx, val) {
    let temp = this.get(idx);
    if (temp) {
      temp.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let ti = this.get(idx - 1);
    let ti2 = ti.next;
    (ti.next = newNode), (newNode.prev = ti);
    (newNode.next = ti2), (ti2.prev = newNode);
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let r = this.get(idx);
    let b = r.prev;
    let f = r.next;
    b.next = f;
    f.prev = b;
    r.next = null;
    r.prev = null;
    this.length--;
    return r;
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
}

let list = new DoublyLinkedList();

list.push(1);
list.push(3);
list.push(5);
list.push(7);
list.push(98);
list.push(21);
list.push(12);
list.push(3132);
list.push(1);
list.push("fds");
list.push(12);
console.log(list.print());
console.log(list.remove(9));
console.log(list.print());
