function insertionSor(arr) {
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
const arr2 = [8, 20, -2, -8, 4, -6];
insertionSor(arr2);
console.log(arr2);
