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
  search(value: ValueType): Node | null {
    const queue = [this.root];
    let result = null;

    while (queue?.length) {
      const current = queue.shift();

      if (!current) continue;

      if (current?.value === value) {
        result = current;
        break;
      }

      queue.push(...[current?.left, current?.right]);
    }

    return result;
  }

  // // dfs, 이전 노ㄷ 찾기
  // // return 반환 문 오류
  // dfs(
  //   value: ValueType,
  //   result: Array<Node> = [],
  //   current: Node | null = this.root
  // ): Node | null {
  //   result.push(current);

  //   if (current.value === value) {
  //     return result;
  //   }

  //   if (current.left) {
  //     return this.dfs(value, result, current.left);
  //   }

  //   if (current.right) {
  //     return this.dfs(value, result, current.right);
  //   }

  //   return result;
  // }

  // remove(value: ValueType): Node | null {
  //   const target = this.search(value);
  //   const result = this.dfs(value);
  //   console.log(result);

  //   if (!target?.left && !target?.right) {
  //   }
  // }

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
