function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let k = i; k > 0; k--) {
      if (arr[k] < arr[k - 1]) {
        let temp = arr[k];
        console.log((arr[k] = arr[k - 1]));
        arr[k] = arr[k - 1];
        arr[k - 1] = temp;
      } else {
        break;
      }
    }
  }
}
const arr2 = [12, 1, 2, 3, 43, 5, 6, 7, 8, 89, 34, 3, 45, 6];
insertionSort(arr2);
console.log(arr2);
