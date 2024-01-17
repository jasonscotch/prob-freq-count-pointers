// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let totalSum = 0;
    let leftSum = 0;
  
    // Calculate the total sum of the array
    for (const num of arr) {
      totalSum += num;
    }
  
    // Iterate through the array to find the pivot index
    for (let i = 0; i < arr.length; i++) {
      // Check if the left sum equals the right sum
      if (leftSum === totalSum - leftSum - arr[i]) {
        return i;
      }
  
      // Update the left sum for the next iteration
      leftSum += arr[i];
    }
  
    // If no valid pivot index is found, return -1
    return -1;
  }
