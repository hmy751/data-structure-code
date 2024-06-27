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

  push(value: ValueType): DoublyLinkedListNode {
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

    return newNode;
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

  search(index: number): DoublyLinkedListNode | null {
    if (this.head === null) return null;
    if (index > this._size) return null;
    if (index < 0) return null;

    let count = index;
    let current = this.head;

    while (current.next && count > 0) {
      count--;
      current = current.next;
    }

    return current;
  }

  unshift(value: ValueType) {
    if (this.head === null) return null;

    const newNode = new DoublyLinkedListNode(value);
    const current = this.head;

    newNode.next = current;
    current.prev = newNode;

    this.head = newNode;

    this._size++;

    return newNode;
  }

  insert(index: number, value: ValueType): DoublyLinkedListNode | null {
    if (this.head === null) return null;
    if (index === 0) return this.unshift(value);
    if (index === this._size) return this.push(value);

    if (index > this._size) return null;
    if (index < 0) return null;

    const newNode = new DoublyLinkedListNode(value)!;
    const current = this.search(index)!;
    const prev = current?.prev!;

    prev.next = newNode;
    newNode.prev = prev;

    newNode.next = current;
    current.prev = newNode;

    this._size++;

    return newNode;
  }

  shift(): DoublyLinkedListNode | null {
    if (this.head === null) return null;

    const current = this.head;
    const next = current.next;

    if (next === null) {
      this.head = null;
      this.tail = null;
      this._size = 0;
      return current;
    }

    next.prev = null;
    this.head = next;
    this.head.prev = null;

    this._size--;

    return current;
  }

  remove(index: number) {
    if (this.head === null) return null;
    if (index === 0) return this.shift();
    if (index === this._size - 1) return this.pop();

    if (index >= this._size) return null;
    if (index < 0) return null;

    const temp = this.search(index)!;
    const prev = temp.prev!;
    const next = temp?.next!;

    prev.next = next;
    next.prev = prev;

    temp.next = null;
    temp.prev = null;

    this._size--;

    return temp;
  }
}
