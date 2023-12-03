/**
 * Calculates and returns the sum of all elements in the array.
 * @param {number[]} arr - The input array.
 * @returns {number} - The sum of array elements.
 */
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example
const array7 = [1, 2, 3, 4, 5];
console.log(sumArray(array7)); // Output: 15

//practice

function sumofArray(arr) {
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const val = [1, 3, 4];

console.log(sumofArray(val));
