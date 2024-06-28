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

  // 진입(호출) => 값 조회 및 수집 => left? => left 진입
  //                            left! => right? => right 진입
  //                                     right! => 반환 및 종료
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

  // 진입(호출) => left? => left 진입
  //             left! => 값 조회 및 수집 => right? => right 진입
  //                                      right! => 반환 및 종료
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

  // 진입(호출) => left? => left 진입
  //             left! => right? => right 진입
  //                      right! => 값 조회 및 수집 => 반환 및 종료
  postorderTraverse(
    current: Node | null = this.root,
    result: Array<ValueType> = []
  ): Array<ValueType> {
    if (current?.left) {
      this.postorderTraverse(current.left, result);
    }

    if (current?.right) {
      this.postorderTraverse(current.right, result);
    }

    if (current) {
      result.push(current.value);
    }

    return result;
  }
}
