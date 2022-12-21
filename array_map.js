// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

// let array = [1, 2, 3];
// const map = array.map(x => x * 3);
// console.log(map);

// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

// let array = ["hello", "goodbye"];
// console.log(array.map(x => x.toUpperCase()));

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// let people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
// const names = people.map(x => x["name"])
// console.log(names)

// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

// let numbers = [1, 2, 3];
// let newNumbers = numbers.map(x => x + 7);
// console.log(newNumbers);


// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

// let array = ["hello", "goodbye"];
// let lengths = array.map(x => x.length);
// console.log(lengths);

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// let people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
// const ages = people.map(x => x["age"])
// console.log(ages)

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// let numbers = [1, 2, 3];
// let halves = numbers.map(x => (x / 2));
// console.log(halves);

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// let array = ["hello", "goodbye"];
// const firstLetters = array.map(x => x.slice(0,1));
// console.log(firstLetters);

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// let people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]
// const ages = people.map(x => x["age"] * 2)
// console.log(ages)

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].

// let numbers = [1, 2, 3];
// let strings = numbers.map(x => x.toString());
// console.log(strings);


// # SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d
// # SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf
// # SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98