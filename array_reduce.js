// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

// let array = [5, 10, 8, 3]
// let sum = 0
// for(let i = 0; i < array.length; i++) {
//   sum = sum + array[i]
// };
// console.log(sum)

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// let sports = ["volleyball", "basketball", "badminton"]
// let string = sports.join("")
// console.log(string)

// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
// let cost = 0
// items.forEach(item => cost = cost + item["price"])
// console.log(cost)


// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

// let numbers = [5, 10, 8, 3, 9]
// let minNumber = numbers[0]
// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] < minNumber) {
//     minNumber = numbers[i]
//   }
// }
// console.log(minNumber)

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// let sports = ["volleyball", "basketball", "badminton"]
// let totalLength = 0
// sports.forEach(sport => totalLength += sport.length)
// console.log(totalLength)

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
// let cheapest = items[0]
// for(let i = 0; i < items.length; i++) {
//   if(items[i]["price"] < cheapest["price"]) {
//     cheapest = items[i]
//   }
// }
// console.log(cheapest)

// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

// let numbers =[5, 10, 8, 3]
// let product = 1
// numbers.forEach(number => product *= number)
// console.log(product)

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// let sports = ["volleyball", "basketball", "badminton"]
// console.log(sports.join("-"))

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]
// let shortestName = items[0]
// for(let i = 0; i < items.length; i++) {
//   if(items[i]["name"].length < shortestName["name"].length) {
//     shortestName = items[i]
//   };
// }
// console.log(shortestName)

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.

// let numbers = [5, 10, 8, 3]
// let maxNumber = numbers[0]
// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] > maxNumber) {
//     maxNumber = numbers[i]
//   };
// }
// console.log(maxNumber)


// # SOLUTIONS (using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
// # SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
// # SOLUTIONS (using .reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35