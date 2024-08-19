export const quickSort: (array: number[]) => number[] = (array: number[]) => {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const left = [];
  const right = [];

  // 분할, 문제를 작은 하위 문제로 분할한다.
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // 정복, 하위 문제를 재귀적으로 해결한다.
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // 병합, 하위 문제의 해결책을 결합하여 원래 문제를 해결한다.
  return [...sortedLeft, pivot, ...sortedRight];
};
