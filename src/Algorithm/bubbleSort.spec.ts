import { bubbleSort } from "./bubbleSort";

describe("Test Bubble Sort", () => {
  it("주어진 배열을 정렬한다.", () => {
    const arr = [3, 2, 5, 10, 1];

    expect(bubbleSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
  });
});
