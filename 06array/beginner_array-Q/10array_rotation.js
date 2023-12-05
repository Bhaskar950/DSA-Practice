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
console.log(rotateArray(array10, 8)); // Output: [4, 5, 1, 2, 3]

//function slice
// const array = [1, 3, 4, 5, 6];

// const val = array.slice(3);

// console.log(val);

//practice

function arrayRotate(arr, k) {
  const n = arr.length;
  k %= n;
  return arr.slice(n - k).concat(arr.slice(0, n - k));
}

const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 4, 3];

console.log(arrayRotate(arrays, 5));
