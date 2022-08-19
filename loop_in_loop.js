// #  1. Use a nested loop to convert an array of number pairs into a single flattened array.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].
// var nestedArray = [[1, 3], [8, 9], [2, 16]];
// var flatArray = [];
// for (let i = 0; i < nestedArray.length; i++) {
//   for (let j = 0; j < nestedArray[i].length; j++) {
//     flatArray.push(nestedArray[i][j]);
//   };
// };
// console.log(flatArray)

// #  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// #     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].
// var array1 = ["a", "b", "c"];
// var array2 = ["d", "e", "f", "g"];
// var combinedArray = []
// array1.forEach(index => {
//   array2.forEach(letter => {
//     combinedArray.push(index + letter);
//   });
// });
// console.log(combinedArray)

// #  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// #     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].
// var array = ["a", "b", "c", "d"];
// var combinedArray = []
// array.forEach(firstLetter => {
//   array.forEach(secondLetter => {
//     if(firstLetter !== secondLetter){
//       combinedArray.push(firstLetter + secondLetter);
//     }
//   });
// });
// console.log(combinedArray)

// #  4. Use a nested loop to find the largest product of any two different numbers within a given array.
// #     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.
// var array = [5, -2, 8, 1, -9, -7, 2, 6, 10];
// var maxProduct = array[0] * array[1]
// array.forEach(x => {
//   array.forEach(y => {
//     if(x !== y && x * y > maxProduct) {
//       maxProduct = x * y;
//     };
//   });
// });
// console.log(maxProduct)

// #  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// #     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.
// var pairedArray = [[1, 6], [10, 9], [5, 16]];
// var sum = 0;
// pairedArray.forEach(pair => {
//   pair.forEach(number => {
//     sum += number;
//   });
// });
// console.log(sum);

// #  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// #     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].
var array1 = [1, 2, 5];
var array2 = [6, 7, 8];
var sumArray = [];
array1.forEach(x => {
  array2.forEach(y => {
    sumArray.push(x + y);
  });
});
console.log(sumArray)
// #  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// #     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

// #  8. Use a nested loop to find the largest sum of any two different numbers within an array.
// #     For example, [1, 8, 3, 10] becomes 18.

// #  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// #     For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

// # 10. Use a nested loop to convert an array of string arrays into a single string.
// #     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".


// # SOLUTIONS: https://gist.github.com/peterxjang/af8985dc4fb07ea14b4bd6ba41cb08f8