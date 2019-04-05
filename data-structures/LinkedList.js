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
        break;
      }
      if (current.next === this.tail) {
        this.tail = current;
        break;
      }
      current = current.next;
    }
    this.length--;
    return popped.value;
  }

  get(index) {
    let counter = 0;
    let current = this.head;

    while (counter <= index) {
      if (counter === index) {
        return current.value;
      }
      current = current.next;
      counter++;
    }
  }

  delete(index) {
    if (index === 0) {
      const value = this.head.value;
      this.head = this.head.next;
      this.length--;
      return value;
    }
    let counter = 1;
    let current = this.head.next;
    let prevNode = this.head;

    while (counter <= index) {
      if (counter === index) {
        return current.value;
      }
      prevNode = current;
      current = current.next;
      counter++;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
