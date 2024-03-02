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

  BFS() {
    let data = [],
      queue = [],
      node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let queue = [];
    function traverse(node) {
      queue.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return queue;
  }

  DFSPostOrder() {
    let queue = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      queue.push(node.val);
    }
    traverse(this.root);
    return queue;
  }

  DFSInOrder() {
    let queue = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      queue.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return queue;
  }
}

let bst = new BinarySearchTree();
bst.root = new Node(10);
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.DFSInOrder());
