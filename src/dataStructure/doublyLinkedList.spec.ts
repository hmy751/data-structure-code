import { DoublyLinkedList } from "./doublyLinkedList";

describe("Test Doubly Linked List", () => {
  it("리스트 생성", () => {
    const list = new DoublyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it("리스트 생성 후 노드 추가", () => {
    const list = new DoublyLinkedList();

    list.push(1);

    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(1);
    expect(list.size).toBe(1);
  });

  it("기존 리스트에 노드 추가", () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);

    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(2);
    expect(list.head?.next).toBe(list.tail);
    expect(list.tail?.prev).toBe(list.head);
    expect(list.size).toBe(2);
  });

  it("기존 리스트에서 노드 제거", () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const firstPopNode = list.pop();
    expect(firstPopNode?.value).toBe(4);

    const secondPopNode = list.pop();
    expect(secondPopNode?.value).toBe(3);

    expect(list?.tail?.value).toBe(2);
    expect(list?.tail?.prev?.value).toBe(1);
    expect(list.size).toBe(2);
  });

  it("Head가 1개일 때 노드 제거", () => {
    const list = new DoublyLinkedList();

    list.push(1);
    const popNode = list.pop();

    expect(popNode?.value).toBe(1);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.size).toBe(0);
  });

  it("리스트의 노드가 없을 때 노드 제거", () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.pop();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.size).toBe(0);

    const popNode = list.pop();

    expect(popNode).toBe(null);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.size).toBe(0);
  });

  it("특정 인덱스에 노드를 추가", () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const insertNode = list.insert(2, 33);

    expect(insertNode?.value).toBe(33);
    expect(insertNode?.next?.value).toBe(3);
    expect(insertNode?.prev?.value).toBe(2);
    expect(list.size).toBe(5);

    const insertNode1 = list.insert(0, 0);

    expect(insertNode1?.value).toBe(0);
    expect(insertNode1?.next?.value).toBe(1);
    expect(insertNode1?.prev).toBe(null);
    expect(list.size).toBe(6);

    const insertNode2 = list.insert(6, 66);

    expect(insertNode2?.value).toBe(66);
    expect(insertNode2?.next).toBe(null);
    expect(insertNode2?.prev?.value).toBe(4);
    expect(list.size).toBe(7);
  });

  it("무효한 인덱스에 노드를 추가", () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    expect(list.insert(6, 66)).toBe(null);
    expect(list.insert(-1, -11)).toBe(null);
  });

  it("특정 인덱스의 노드 제거", () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const removedNode = list.remove(1);

    expect(removedNode?.value).toBe(2);
    expect(removedNode?.prev).toBe(null);
    expect(removedNode?.next).toBe(null);
    expect(list.size).toBe(3);

    const removedNode1 = list.remove(2);

    expect(removedNode1?.value).toBe(4);
    expect(list.size).toBe(2);

    const removedNode2 = list.remove(0);

    expect(removedNode2?.value).toBe(1);
    expect(list.size).toBe(1);
  });

  it("무효한 인덱스의 노드 제거", () => {
    const list = new DoublyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    expect(list.remove(6)).toBe(null);
    expect(list.remove(-1)).toBe(null);
  });
});
