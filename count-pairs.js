// add whatever parameters you deem necessary
function countPairs(arr, target) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    let count = 0;
  
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const currentSum = arr[left] + arr[right];
  
      if (currentSum === target) {
        count++;
        left++;
        right--;
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return count;
  }