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

  remove() {
    if (this.list.length <= 1) return null;

    this.swap(1, this.list.length - 1);
    const result = this.list.pop();
    this.heapifyDown(1);
    return result;
  }

  heapifyUp(index: number) {
    const parentIndex = Math.floor(index / 2);
    if (parentIndex === 0) return;

    if (this.list[index] > this.list[parentIndex]) {
      this.swap(index, parentIndex);
    }
    this.heapifyUp(parentIndex);
  }

  heapifyDown(index: number) {
    const leftChildIndex = 2 * index;
    const rightChildIndex = 2 * index + 1;

    if (!this.list?.[leftChildIndex] && !this.list?.[rightChildIndex]) return;

    if (!this.list?.[leftChildIndex]) {
      if (this.list[index] < this.list[rightChildIndex]) {
        this.swap(index, rightChildIndex);
      }
      this.heapifyDown(rightChildIndex);
      return;
    }

    if (!this.list?.[rightChildIndex]) {
      if (this.list[index] < this.list[leftChildIndex]) {
        this.swap(index, leftChildIndex);
      }
      this.heapifyDown(leftChildIndex);
      return;
    }

    const targetIndex =
      this.list[leftChildIndex] > this.list[rightChildIndex]
        ? leftChildIndex
        : rightChildIndex;

    if (this.list[index] < this.list[targetIndex]) {
      this.swap(index, targetIndex);
      this.heapifyDown(targetIndex);
      return;
    }
  }

  swap(preIndex: number, currentIndex: number) {
    const temp = this.list[preIndex];
    this.list[preIndex] = this.list[currentIndex];
    this.list[currentIndex] = temp;
  }
}
