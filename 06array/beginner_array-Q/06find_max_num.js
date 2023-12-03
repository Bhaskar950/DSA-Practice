/**
 * Finds and returns the maximum element in the array.
 * @param {number[]} arr - The input array.
 * @returns {number} - The maximum element.
 */
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Example
const array6 = [3, 7, 2, 8, 1];
console.log(findMax(array6)); // Output: 8

//practice

function maxs(arr) {
  let max = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const v = [54, 67, 879, 99];

console.log(maxs(v));
