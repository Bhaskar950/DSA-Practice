/**
 * Counts the frequency of each element in the array.
 * @param {number[]} arr - The input array.
 * @returns {Object} - An object with element frequencies.
 */
function frequencyCount(arr) {
  const count = {};
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }
  return count;
}

// Example
const array13 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(frequencyCount(array13)); // Output: {1: 1, 2: 2, 3: 3, 4: 4}
