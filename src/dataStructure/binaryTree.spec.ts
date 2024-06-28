import { Node, BinaryTree } from "./binaryTree";

describe("Test Binary test", () => {
  it("전위순회(preorder) 테스트", () => {
    const tree = new BinaryTree();

    tree.root = new Node("A");

    tree.root.left = new Node("B");
    tree.root.right = new Node("C");

    tree.root.left.left = new Node("D");
    tree.root.left.right = new Node("E");

    tree.root.left.right.left = new Node("F");

    const result = tree.preorderTraverse();

    expect(result).toBe(["A", "B", "D", "E", "F", "C"]);
  });
});
