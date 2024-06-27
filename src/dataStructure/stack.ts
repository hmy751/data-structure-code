type ValueType = string | number | Record<string, unknown> | Array<unknown>;
import { SinglyLinkedList } from "./singlyLinkedList";

export class Stack {
  list: SinglyLinkedList;

  constructor() {
    this.list = new SinglyLinkedList();
  }

  push(value: ValueType) {
    this.list.push(value);
  }

  pop(): ValueType | null {
    const current = this.list.pop();
    return current?.value || null;
  }

  get size(): number {
    return this.list.size;
  }
}
