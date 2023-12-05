// /**
//  * Removes duplicates from the array and returns an array with only unique elements.
//  * @param {number[]} arr - The input array.
//  * @returns {number[]} - The array with only unique elements.
//  */
// function removeDuplicates(arr) {
//   return Array.from(new Set(arr));
// }

// // Example
// const array11 = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(array11)); // Output: [1, 2, 3, 4, 5]

//pending

//practice

//bruite force approach

function removeDuplicates(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}

const arrvals = [1, 3, 3, 4, 5, 5, 5, 8];

console.log(removeDuplicates(arrvals));

console.log("this is brute force approach");

//

function arrayDuplicateRemove(arr) {
  return Array.from(new Set(arr));
}

const arrval = [1, 3, 3, 4, 5, 5, 5, 8];

console.log(arrayDuplicateRemove(arrval));

console.log("this is come from set function");
