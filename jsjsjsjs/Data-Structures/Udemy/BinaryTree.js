class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let b = this.root;
    while (true) {
      if (val === b.val) return undefined;
      if (val > b.val) {
        if (b.right) {
          b = b.right;
        } else {
          b.right = newNode;
          return this;
        }
      } else {
        if (b.left) {
          b = b.left;
        } else {
          b.left = newNode;
          return this;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let b = this.root;
    while (true) {
      if (val === b.val) return b;
      if (val > b.val) {
        if (b.right) {
          b = b.right;
        } else return false;
      } else {
        if (b.left) {
          b = b.left;
        } else return false;
      }
    }
  }
}

let bst = new BinarySearchTree();
bst.root = new Node(10);
bst.insert(15);
bst.insert(9);
bst.insert(6);
bst.insert(1);
bst.insert(0);
bst.insert(13);
bst.insert(4);
console.log(bst.find(15));
console.log(bst.find(9));
console.log(bst.find(0));
