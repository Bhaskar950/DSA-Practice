/**
 * Filters and returns an array containing only the negative numbers.
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The array containing only negative numbers.
 */
function getNegativeNumbers(arr) {
  return arr.filter((num) => num < 0);
}

// Example
const array14 = [1, -2, 3, -4, 5];
console.log(getNegativeNumbers(array14)); // Output: [-2, -4]

function negetiveNum(arr) {
  return arr.filter((num) => num < 0);
}

const val = [1, -3, 4, -4, -4];

console.log(negetiveNum(val));
