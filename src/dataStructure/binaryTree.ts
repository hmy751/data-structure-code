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

export class BinaryTree {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  preorderTraverse(
    current: Node | null = this.root,
    result: Array<ValueType> = []
  ): Array<ValueType> {
    if (current) {
      result.push(current.value);
    }

    if (current?.left) {
      this.preorderTraverse(current.left, result);
    }

    if (current?.right) {
      this.preorderTraverse(current.right, result);
    }

    return result;
  }

  inorderTraverse(
    current: Node | null = this.root,
    result: Array<ValueType> = []
  ): Array<ValueType> {
    if (current?.left) {
      this.inorderTraverse(current.left, result);
    }

    if (current) {
      result.push(current.value);
    }

    if (current?.right) {
      this.inorderTraverse(current.right, result);
    }

    return result;
  }

  postorderTraverse() {}
}
