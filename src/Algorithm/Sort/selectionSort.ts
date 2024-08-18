export const selectionSort = (array: number[]) => {
  for (let i = 0; i < array.length - 1; i++) {
    let leastIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[leastIndex]) {
        leastIndex = j;
      }
    }

    if (leastIndex !== i) {
      const temp = array[leastIndex];
      array[leastIndex] = array[i];
      array[i] = temp;
    }
  }

  return array;
};
