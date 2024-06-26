import { DoublyLinkedList } from "./doublyLinkedList";

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
