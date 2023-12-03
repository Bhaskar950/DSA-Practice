/**
 * Filters and returns an array containing only the even numbers.
 * @param {number[]} arr - The input array.
 * @returns {number[]} - The array containing only even numbers.
 */
function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Example
const array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getEvenNumbers(array9)); // Output: [2, 4, 6, 8]

//practice
function evenNum(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const val = [2, 4, 6, 7, 88];

console.log(evenNum(val));
