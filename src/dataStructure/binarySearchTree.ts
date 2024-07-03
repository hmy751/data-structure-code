type ValueType = string | number | Record<string, unknown> | Array<unknown>;

export class Node {
  value: ValueType;
  left: Node | null;
  right: Node | null;

  constructor(value: ValueType) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  add(value: ValueType, current: Node | null = this.root) {
    const newNode = new Node(value);

    if (current === null) {
      this.root = newNode;
      return;
    }

    if (current?.value < value) {
      if (current?.right) {
        this.add(value, current?.right);
        return;
      }

      current.right = newNode;
      return;
    }

    if (current?.value > value) {
      if (current?.left) {
        this.add(value, current?.left);
        return;
      }

      current.left = newNode;
      return;
    }
  }

  remove() {}

  printPreorder(
    current: Node | null = this.root,
    result: Array<ValueType> = []
  ): Array<ValueType> {
    if (!current) {
      return result;
    }

    result.push(current?.value);

    if (current.left) {
      this.printPreorder(current?.left, result);
    }

    if (current.right) {
      this.printPreorder(current?.right, result);
    }

    return result;
  }
}
