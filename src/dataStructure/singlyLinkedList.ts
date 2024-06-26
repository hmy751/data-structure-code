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

  push(value: ValueType) {
    const newNode = new ListNode(value);

    if (this.head === null || this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this._size++;

    return newNode;
  }

  pop(): ListNode | null {
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

  search(index: number): ListNode | null {
    if (this.head === null) return null;
    if (index > this._size) return null;
    if (index < 0) return null;

    let count = index;
    let current: ListNode | null = this.head;

    while (current.next && count > 0) {
      count--;
      current = current.next;
    }

    return current;
  }

  unshift(value: ValueType): ListNode | null {
    if (this.head === null) return null;

    const newNode = new ListNode(value);

    newNode.next = this.head;
    this.head = newNode;

    this._size++;

    return this.head;
  }

  insert(index: number, value: ValueType): ListNode | null {
    if (this.head === null) return null;
    if (index === 0) return this.unshift(value);
    if (index === this._size) return this.push(value);

    if (index > this._size) return null;
    if (index < 0) return null;

    const temp = this.search(index - 1)!;
    const newNode = new ListNode(value);

    newNode.next = temp.next;
    temp.next = newNode;

    this._size++;

    return newNode;
  }

  shift(): ListNode | null {
    if (this.head === null) return null;

    const temp = this.head;

    this.head = this.head.next;
    temp.next = null;

    this._size--;

    return temp;
  }

  remove(index: number): ListNode | null {
    if (this.head === null) return null;
    if (index === 0) return this.shift();
    if (index === this._size) return this.pop();

    if (index > this._size) return null;
    if (index < 0) return null;

    const temp = this.search(index - 1)!;
    const target = temp?.next!;
    const next = target?.next!;

    temp.next = next;
    target.next = null;

    this._size--;

    return target;
  }

  get size() {
    return this._size;
  }
}
