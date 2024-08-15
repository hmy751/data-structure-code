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
  // 다음 데이터를 통해 호출할 때 주의할 점, linked list처럼 연결된 부분이 없으면
  // 이전 노드와의 연결성을 잃기 때문에 유의 하기
  // if (current?.value > value) {
  //   if (current?.left) {
  //     this.add(value, current?.left);
  //     return;
  //   }

  //   current.left = newNode;
  //   return;
  // }

  // bfs
  search(value: ValueType): (Node | null)[] | null {
    const queue: Array<(Node | null)[]> = [[this.root, null]];
    let result = null;

    while (queue?.length) {
      const [current, parent] = queue.shift()!;

      if (!current) continue;

      if (current?.value === value) {
        result = [current, parent];
        break;
      }

      queue.push(
        ...[
          [current?.left, current],
          [current?.right, current],
        ]
      );
    }

    return result;
  }

  /**
   * remove는 재귀적으로 호출하여 타겟 노드를 찾아간다.
   * 타겟을 찾기전에는 자식 노드에 removedNode를 할당하여 찾아 들어가고, current를 반환하여 부모와의 연결을 유지한다.
   * 타겟을 찾고 나서는 케이스에 따라 나뉜다.
   * 1. 자식 노드가 없을 때는 null을 반환함으로서 그 위치에서 자기 자신을 삭제한다.
   * 2. 한쪽이 없는 경우는 자식 노드를 반환함으로서 자기 자신의 연결은 끊고 자식 노드를 상위로 연결시킨다.
   * 3. 둘 다 있는 경우는 오른쪽 서브 트리의 가장 왼쪽 노드 즉 작은 노드를 찾는다. 이후 값을 자기 자신에게 할당하고 오른쪽 서브 트리 부터 재귀적 조회를 시작하고
   * 해당 노드를 삭제한다.
   */
  remove(value: ValueType): Node | null {
    const removeNode = (current: Node | null, value: ValueType) => {
      if (!current) return null;

      if (value < current.value) {
        current.left = removeNode(current.left, value);
        return current;
      }

      if (value > current.value) {
        current.right = removeNode(current.right, value);
        return current;
      }

      if (current.left === null && current.right === null) return null;

      if (current.left === null) return current.right;
      if (current.right === null) return current.left;

      let min = current.right;
      while (min.left !== null) {
        min = min.left;
      }

      current.value = min.value;
      current.right = removeNode(current.right, min.value);
      return current;
    };

    this.root = removeNode(this.root, value);
    return this.root;
  }

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
  // return을 통해 반환해야 하는 경우를 구분하자
  // 위에 경우 this.printPreorder()을 호출하고 마지막 또는 기본 조건에서
  // result를 return한다.
}
