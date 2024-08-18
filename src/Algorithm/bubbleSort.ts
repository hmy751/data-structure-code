export const bubbleSort = (array: number[]) => {
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        swapped = true;
      }
    }

    if (!swapped) return array;
  }

  return array;
};
