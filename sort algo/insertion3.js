function insert(arr, rightIndex, value) {
  arr.unshift(value);

  for (let i = 1; i < rightIndex + 1; i++) {
    for (let j = i; i > 0; i--) {
      if (arr[j] < arr[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      } else {
        break;
      }
    }
  }
}

let array = [3, 7, 5, 11, 13, 2, 9, 6];

insert(array, 4, 14);

console.log(array); //[2,3,5,7,11....]
