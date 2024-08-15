import { MaxHeap } from "./heap";

describe("Test Heap", () => {
  it("요소를 추가하면, 힙 구조에 따라 요소들이 정렬된다.", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(4);
    maxHeap.add(10);
    maxHeap.add(49);
    maxHeap.add(33);
    maxHeap.add(24);
    maxHeap.add(6);
    maxHeap.add(1);
    maxHeap.add(77);

    expect(JSON.stringify(maxHeap.list)).toBe(
      JSON.stringify([77, 49, 10, 33, 24, 6, 1, 4])
    );
  });

  it("요소를 삭제하면, 힙 구조에 따라 요소들이 정렬된다.", () => {});
});
