export const insertionSort = (array: number[]) => {
  for (let i = 1; i < array.length; i++) {
    // 1번째 부터 key를 지정하여 조회한다.
    const key = array[i];
    // i - 1까지를 정렬된 배열로 기준을 잡는다.
    let j = i - 1;

    // key값이 큰 경우 종료한 후 j + 1에 할당, 즉 삽입하여 종료한다.
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }

  return array;
};
