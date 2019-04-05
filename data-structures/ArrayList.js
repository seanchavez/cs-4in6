class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    const popped = this.data[this.length - 1];

    delete this.data[this.length - 1];
    this.length--;

    return popped;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const deleted = this.data[index];
    delete this.data[index];
    this.length--;

    for (let i = index; i < this.length; i++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length];

    return deleted;
  }
}
