type ValueType = string | number | Record<string, unknown> | Array<unknown>;

export class DoublyLinkedListNode {
  readonly value: ValueType;
  prev: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;

  constructor(value: ValueType) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;
  _size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  get size(): number {
    return this._size;
  }

  push(value: ValueType) {
    const newNode = new DoublyLinkedListNode(value);

    if (this.head === null || this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this._size++;
  }

  pop(): DoublyLinkedListNode | null {
    if (this.head === null || this.tail === null) {
      return null;
    }

    this._size--;

    if (this.tail.prev === null) {
      const current = this.tail;

      this.head = null;
      this.tail = null;

      return current;
    }

    const newTail = this.tail.prev;
    const current = this.tail;

    this.tail = newTail;
    this.tail.next = null;
    this.tail.prev = newTail.prev;

    return current;
  }
}
