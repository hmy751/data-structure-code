import { Node, BinaryTree } from "./binaryTree";

describe("Test Binary test", () => {
  it("preorder(전위순회) 테스트", () => {
    const tree = new BinaryTree();

    tree.root = new Node("A");

    tree.root.left = new Node("B");
    tree.root.right = new Node("C");

    tree.root.left.left = new Node("D");
    tree.root.left.right = new Node("E");

    tree.root.left.right.left = new Node("F");

    //      A
    //     / \
    //    B   C
    //   / \
    //  D   E
    //     /
    //    F

    const result = tree.preorderTraverse();

    expect(JSON.stringify(result)).toBe(
      JSON.stringify(["A", "B", "D", "E", "F", "C"])
    );
  });

  it("inorder(중위순회) 테스트", () => {
    const tree = new BinaryTree();

    tree.root = new Node("A");

    tree.root.left = new Node("B");
    tree.root.right = new Node("C");

    tree.root.left.left = new Node("D");
    tree.root.left.right = new Node("E");

    tree.root.left.right.left = new Node("F");

    //      A
    //     / \
    //    B   C
    //   / \
    //  D   E
    //     /
    //    F

    const result = tree.inorderTraverse();

    expect(JSON.stringify(result)).toBe(
      JSON.stringify(["D", "B", "E", "F", "A", "C"])
    );
  });
});
