// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const letterFrequency = {};
  
    // Count the frequency of each letter in the 'letters' string
    for (const letter of letters) {
      letterFrequency[letter] = (letterFrequency[letter] || 0) + 1;
    }
  
    // Check if there are enough letters to construct the message
    for (const char of message) {
      if (!letterFrequency[char]) {
        return false;
      }
      letterFrequency[char]--;
    }
  
    return true;
  }
