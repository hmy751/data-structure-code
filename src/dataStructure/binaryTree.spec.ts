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

    expect(result).toStrictEqual(["A", "B", "D", "E", "F", "C"]);
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

    expect(result).toStrictEqual(["D", "B", "F", "E", "A", "C"]);
  });

  it("postorder(후위순회) 테스트", () => {
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

    const result = tree.postorderTraverse();

    expect(result).toStrictEqual(["D", "F", "E", "B", "C", "A"]);
  });
});
