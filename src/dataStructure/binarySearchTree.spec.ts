import { BinarySearchTree } from "./binarySearchTree";

describe("Test Binary Search Tree", () => {
  it("현재 노드를 기준으로, 작은 데이터는 왼쪽 서브 트리로, 큰 데이터는 오른쪽 서브 트리로 쌓인다.", () => {
    const tree = new BinarySearchTree();

    tree.add(7);
    tree.add(3);
    tree.add(11);
    tree.add(2);
    tree.add(6);
    tree.add(5);
    tree.add(8);
    tree.add(15);

    //      7
    //    /   \
    //   3     11
    //  / \   /  \
    // 2   6  8  15
    //    /
    //   5

    const result = tree.printPreorder();

    expect(result).toStrictEqual([7, 3, 2, 6, 5, 11, 8, 15]);
  });

  it("하위 노드가 없는 노드를 삭제할 때", () => {
    const tree = new BinarySearchTree();

    tree.add(7);
    tree.add(3);
    tree.add(11);
    tree.add(2);
    tree.add(6);
    tree.add(5);
    tree.add(8);
    tree.add(15);

    //      7
    //    /   \
    //   3     11
    //  / \   /  \
    // 2   6  8  15
    //    /
    //   5

    tree.remove(8);

    //      7
    //    /   \
    //   3     11
    //  / \      \
    // 2   6      15
    //    /
    //   5

    const result = tree.printPreorder();

    expect(result).toStrictEqual([7, 3, 2, 6, 5, 11, 15]);
  });
});
