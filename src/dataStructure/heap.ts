type ValueType = string | number | Record<string, unknown> | Array<unknown>;

export class MaxHeap {
  list: Array<ValueType>;

  constructor() {
    this.list = ["none"];
  }

  add(value: ValueType) {
    this.list.push(value);

    if (this.list.length === 2) return;
    this.heapifyUp(this.list.length - 1);
  }

  remove() {}

  heapifyUp(index: number) {
    const parentIndex = Math.floor(index / 2);
    if (parentIndex === 0) return;

    if (this.list[index] > this.list[parentIndex]) {
      this.swap(index, parentIndex);
    }
    this.heapifyUp(parentIndex);
  }

  swap(preIndex: number, currentIndex: number) {
    const temp = this.list[preIndex];
    this.list[preIndex] = this.list[currentIndex];
    this.list[currentIndex] = temp;
  }
}
