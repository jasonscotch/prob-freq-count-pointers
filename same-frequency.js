// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    // Convert numbers to strings to easily compare digit frequencies
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
  
    // Check if the lengths of the strings are different, return false if so
    if (strNum1.length !== strNum2.length) {
      return false;
    }
  
    // Create objects to store digit frequencies for both numbers
    const frequencyCount1 = {};
    const frequencyCount2 = {};
  
    // Count digit frequencies for num1
    for (const digit of strNum1) {
      frequencyCount1[digit] = (frequencyCount1[digit] || 0) + 1;
    }
  
    // Count digit frequencies for num2
    for (const digit of strNum2) {
      frequencyCount2[digit] = (frequencyCount2[digit] || 0) + 1;
    }
  
    // Compare digit frequencies
    for (const key in frequencyCount1) {
      if (frequencyCount1[key] !== frequencyCount2[key]) {
        return false;
      }
    }
  
    // If all frequencies match, return true
    return true;
  }
