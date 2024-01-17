// add whatever parameters you deem necessary
function separatePositive(arr) {
    // Initialize two pointers, one for positive numbers and one for negative numbers
    let posPointer = 0;
  
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is positive, swap it with the element at posPointer
      if (arr[i] > 0) {
        [arr[i], arr[posPointer]] = [arr[posPointer], arr[i]];
        posPointer++;
      }
    }
  
    return arr;
  }
