//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  #value = null;
  #next = null;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  get value() {
    return this.#value;
  }

  get next() {
    return this.#next;
  }

  set next(elm) {
    this.#next = elm;
  }
}

export class List {
  #tail = null;

  constructor(arr) {
    if (arr) {
      for (const value of arr) {
        this.add(new Element(value))
      }
    }
  }

  add(nextValue) {
    nextValue.next = this.head;
    this.#tail = nextValue;
  }

  get length() {
    let current = this.#tail;
    let size = 0;

    while (current) {
      current = current.next;
      size++;
    }

    return size
  }

  get head() {
    return this.#tail;

  }

  toArray() {
    const arr = []

    let current = this.#tail;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr
  }

  reverse() {
    const values = this.toArray()

    this.#tail = new List(values).head

    return this;
  }
}
