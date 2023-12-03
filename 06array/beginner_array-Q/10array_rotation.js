/**
 * Rotates the elements of the array to the right by a specified number of positions.
 * @param {number[]} arr - The input array.
 * @param {number} k - The number of positions to rotate.
 * @returns {number[]} - The rotated array.
 */
function rotateArray(arr, k) {
  const n = arr.length;
  k %= n; // Handle rotations larger than array size
  return arr.slice(n - k).concat(arr.slice(0, n - k));
}

// Example
const array10 = [1, 2, 3, 4, 5];
console.log(rotateArray(array10, 2)); // Output: [4, 5, 1, 2, 3]
