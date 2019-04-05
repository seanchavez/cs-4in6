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
    this.length++;
  }

  pop() {
    const popped = this.tail;
    let current = this.head;
    while (current) {
      if (this.head === this.tail) {
        this.head = this.tail = null;
      }
      if (current.next === this.tail) {
        this.tail = current;
      }
    }
    this.length--;
    return popped.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
