// add whatever parameters you deem necessary
function longestFall(arr) {
    if (arr.length === 0) {
      return 0;
    }
  
    let maxFallLength = 1;
    let currentFallLength = 1;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        // If the current number is smaller than the previous, the fall continues
        currentFallLength++;
      } else {
        // If the current number is not smaller, reset the fall length
        currentFallLength = 1;
      }
  
      // Update the max fall length if the current fall is longer
      maxFallLength = Math.max(maxFallLength, currentFallLength);
    }
  
    return maxFallLength;
  }
