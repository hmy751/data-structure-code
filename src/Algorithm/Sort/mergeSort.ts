const merge: (left: number[], right: number[]) => number[] = (left, right) => {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
};

export const mergeSort: (array: number[]) => number[] = (array: number[]) => {
  if (array.length <= 1) return array;

  // 분할, 문제를 작은 하위 문제로 분할한다.
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // 정복, 하위 문제를 재귀적으로 해결한다.
  // 병합, 하위 문제의 해결책을 결합하여 원래 문제를 해결한다.
  return merge(mergeSort(left), mergeSort(right));
};
