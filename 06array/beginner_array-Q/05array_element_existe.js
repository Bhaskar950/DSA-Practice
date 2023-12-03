/**
 * Checks if a specific element exists in the array.
 * @param {number[]} arr - The input array.
 * @param {number} element - The element to check for existence.
 * @returns {boolean} - True if the element exists, otherwise false.
 */
function containsElement(arr, element) {
  return arr.includes(element);
}

// Example
const array5 = [1, 2, 3, 4, 5];
console.log(containsElement(array5, 3)); // Output: true

//practice
function arrExist(arr, element) {
  return arr.includes(element);
}

const arrr = [3, 4, 5, 6];

console.log(arrExist(arrr, 88));
