import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";

describe("Test Sort", () => {
  it("버블 정렬 테스트", () => {
    const arr = [3, 2, 5, 10, 1];

    expect(bubbleSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
  });

  it("선택 정렬 테스트", () => {
    const arr = [3, 2, 5, 10, 1];

    expect(selectionSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
  });

  it("삽입 정렬 테스트", () => {
    const arr = [3, 2, 5, 10, 1];

    expect(insertionSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
  });

  it("병합 정렬 테스트", () => {
    const arr = [3, 2, 5, 10, 1];

    expect(mergeSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
  });

  it("퀵 정렬 테스트", () => {
    const arr = [3, 2, 5, 10, 1];

    expect(quickSort(arr)).toStrictEqual([1, 2, 3, 5, 10]);
  });
});
