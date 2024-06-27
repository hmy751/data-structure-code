type ValueType = string | number | Record<string, unknown> | Array<unknown>;
import { SinglyLinkedList } from "./singlyLinkedList";

export class Queue {
  list: SinglyLinkedList;

  constructor() {
    this.list = new SinglyLinkedList();
  }

  push(value: ValueType) {
    this.list.push(value);
  }

  shift(): ValueType | null {
    const current = this.list.shift();
    return current?.value || null;
  }

  get size(): number {
    return this.list.size;
  }
}
