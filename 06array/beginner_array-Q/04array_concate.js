/**
 * Concatenates two arrays and returns the result.
 * @param {number[]} arr1 - The first input array.
 * @param {number[]} arr2 - The second input array.
 * @returns {number[]} - The concatenated array.
 */
function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// Example
const array4_1 = [1, 2, 3];
const array4_2 = [4, 5, 6];
console.log(concatenateArrays(array4_1, array4_2)); // Output: [1, 2, 3, 4, 5, 6]

//practice
function conArray(arr1, arr2) {
  return arr1.concat(arr2);
}

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

console.log(conArray(array1, array2));
