const insertionSor = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let k = i; i > 0; i--) {
      if (arr[k] < arr[k - 1]) {
        let temp = arr[k];
        arr[k] = arr[k - 1];
        arr[k - 1] = temp;
      } else {
        break;
      }
    }
  }
};

const arr = [12, 1, 2, 3, 43, 5, 6, 7, 8, 89, 3, 2, 34];
insertionSor(arr);
console.log(arr);
