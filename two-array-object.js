// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    // Initialize an empty object to store the result
    const result = {};
  
    // Iterate through keys array
    for (let i = 0; i < keys.length; i++) {
      // Use values array if available, otherwise use null
      result[keys[i]] = i < values.length ? values[i] : null;
    }
  
    return result;
  }
