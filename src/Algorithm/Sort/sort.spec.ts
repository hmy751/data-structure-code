import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";

describe("Test Sort", () => {
  it("주어진 배열을 정렬한다.", () => {
    const arr = [3, 2, 5, 10, 1];

    expect(bubbleSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
    expect(selectionSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
    expect(insertionSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
    expect(mergeSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
  });
});
