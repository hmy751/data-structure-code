import { SinglyLinkedList } from "./singlyLinkedList";

describe("Test Singly Linked List", () => {
  it("리스트 생성", () => {
    const list = new SinglyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it("리스트 생성 후 노드 추가", () => {
    const list = new SinglyLinkedList();

    list.push(1);

    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(1);
    expect(list.size).toBe(1);
  });

  it("기존 리스트에 노드 추가", () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);

    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(2);
    expect(list.size).toBe(2);
  });

  it("기존 리스트에서 노드 제거", () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    list.pop();
    list.pop();

    expect(list?.tail?.value).toBe(2);
    expect(list.size).toBe(2);
  });

  it("Head가 1개일 때 노드 제거", () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.pop();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.size).toBe(0);
  });

  // 리스트에 암 것도 없을 때 제거
});
