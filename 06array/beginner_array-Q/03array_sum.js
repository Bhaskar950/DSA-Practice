// /**
//  * Calculates the sum of elements in the array using recursion.
//  * @param {number[]} arr - The input array.
//  * @param {number} [index=0] - The current index during recursion.
//  * @returns {number} - The sum of array elements.
//  */
// function sumArrayRecursive(arr, index = 0) {
//   if (index === arr.length) {
//     return 0;
//   }
//   return arr[index] + sumArrayRecursive(arr, index + 1);
// }

// // Example
// const array3 = [1, 2, 3, 4, 5];
// console.log(sumArrayRecursive(array3)); // Output: 15

//practice
function array_sum(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + array_sum(arr, index + 1);
}

const arraysum = [1, 2, 3];

console.log(array_sum(arraysum));
