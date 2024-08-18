import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";

describe("Test Sort", () => {
  it("주어진 배열을 정렬한다.", () => {
    const arr = [3, 2, 5, 10, 1];

    expect(bubbleSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
    expect(selectionSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
  });
});
