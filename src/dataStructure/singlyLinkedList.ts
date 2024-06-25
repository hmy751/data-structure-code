type ValueType = string | number | Record<string, unknown> | Array<unknown>;

export class ListNode {
  readonly value: ValueType;
  next: this | null;

  constructor(value: ValueType) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  _size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: ValueType) {
    const newNode = new ListNode(value);

    if (this.head === null || this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this._size++;
  }

  remove() {
    if (this.head === null || this.tail === null) {
      return null;
    }

    let current = this.head;
    let newTail: ListNode = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this._size--;

    if (newTail.next === null) {
      this.head = null;
      this.tail = null;
      return current;
    }

    newTail.next = null;
    this.tail = newTail;

    return current;
  }

  get size() {
    return this._size;
  }
}

const list = new SinglyLinkedList();
list.add(2);
list.add(2);
list.add(2);
// console.log(list.getSize());
console.log(list.remove());
console.log(list.remove());
console.log(list.remove());
console.log(list.remove());
list.add(2);
// console.log(list.remove());
console.log(list.size);
console.log(list);
// console.log(list.remove());
// console.log(list.remove());
// console.log(list.getSize());
