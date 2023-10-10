console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

//Task 1
const hippoExists = animalStrings.some((string) => string === "hippo");
//console.log(hippoExists);

//Task 2
// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
//console.log(catStartingFromIndexFiveExists);

//Task 3
// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((string) =>
  string.startsWith("p")
);
//console.log(firstAnimalStartingWithLetterP);

//Task 4
const indexOfGiraffe = animalStrings.findIndex((string) =>
  string.includes("giraffe")
);
//console.log(indexOfGiraffe);

//Task 5
// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy.
const animalsSortedAlphabetically = animalStrings.slice().sort();
//console.log(animalsSortedAlphabetically);

//Task 6
// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.some((string) =>
  string.endsWith("z")
);
//console.log(anyAnimalEndsWithLetterZ);

//Task 7
const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (string) => string.length > 2
);
//console.log(everyAnimalHasMoreThanTwoLetters);

//Task 8
// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)
const sumOfAllAnimalCharacters = animalStrings.reduce((a, b) => a + b).length;
//console.log(sumOfAllAnimalCharacters);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
