// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let i = 0; // Pointer for str1
    let j = 0; // Pointer for str2
  
    while (j < str2.length) {
      // If characters match, move to the next character in str1
      if (str1[i] === str2[j]) {
        i++;
      }
  
      // Move to the next character in str2
      j++;
  
      // If all characters in str1 are found in order, return true
      if (i === str1.length) {
        return true;
      }
    }
  
    // If we reach the end of str2 and haven't found all characters in order, return false
    return false;
  }