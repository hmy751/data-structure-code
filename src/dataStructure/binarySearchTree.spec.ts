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

    //     7
    //    / \
    //   3   11
    //  / \   \
    // 2   6   15
    //    / \
    //   5   8

    const result = tree.printPreorder();

    expect(result).toBe([7, 3, 2, 6, 5, 8, 11, 15]);
  });
});
