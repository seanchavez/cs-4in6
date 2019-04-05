class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) this.head = node;

    if (this.tail) this.tail.next = node;

    this.tail = node;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
