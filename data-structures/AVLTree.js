class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
    this.value = value
    this.height = 1
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value)
    } else {
      this.root.add(value)
    }
  }

  toObject() {
    return this.root
  }
}