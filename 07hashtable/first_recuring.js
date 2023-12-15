//brute-force approach o(n2)

// function firstRecurringChar(input) {
//   for (i = 0; i < input.length; i++) {
//     for (j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) return input[i];
//     }
//   }
//   return undefined;
// }

// const arr = [1, 8, 9, 3, 4, 5, 6, 6, 2];

// const val = firstRecurringChar(arr);
// console.log(val);

//hashtable

// function firstRecurringChar1(input) {
//   let map = {};
//   for (i = 0; i < input.length; i++) {
//     if (map[input[i]] !== undefined) {
//       return input[i];
//     } else {
//       map[input[i]] = i;
//     }
//     console.log(map);
//   }
//   return undefined;
// }

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 8];

// const val1 = firstRecurringChar1(arr1);
// console.log(val1);

function firstRecurringChar2(input) {
  let map = {};
  for (i = 0; i < input.length; i++) {
    console.log(map);
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    // console.log(map);
  }

  return undefined;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 8];

const val1 = firstRecurringChar2(arr1);
console.log(val1);
