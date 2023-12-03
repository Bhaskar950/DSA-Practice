/**
 * Removes duplicates from the array and returns an array with only unique elements.
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The array with only unique elements.
 */
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Example
const array11 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array11)); // Output: [1, 2, 3, 4, 5]
