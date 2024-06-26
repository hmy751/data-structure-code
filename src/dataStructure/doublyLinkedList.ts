type ValueType = string | number | Record<string, unknown> | Array<unknown>;

export class DoublyLinkedListNode {
  readonly value: ValueType;
  readonly prev: DoublyLinkedListNode | null;
  readonly next: DoublyLinkedListNode | null;

  constructor(value: ValueType) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  readonly head: DoublyLinkedListNode | null;
  readonly tail: DoublyLinkedListNode | null;
  readonly _size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  get size(): number {
    return this._size;
  }
}
