/**
 * Sorts the elements of the array in ascending order.
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The sorted array.
 */
function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

// Example
const array12 = [5, 2, 8, 1, 3];
console.log(sortArray(array12)); // Output: [1, 2, 3, 5, 8]
