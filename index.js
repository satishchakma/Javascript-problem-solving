// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

function reverseStr(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

console.log(reverseStr("javascript hello"));

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

var numbers = [2, -5, 10, -3, 7];

var sum = 0;

for (var i = 0; i < numbers.length; ++i) {
  if (numbers[i] > 0) {
    sum += numbers[i];
  }
}

console.log(sum);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5, 5];

let isMap = {};
let mostFrequent = 0;
let maxCount = 0;

for (let i of arr) {
  if (isMap[i] == null) {
    isMap[i] = 1;
  } else {
    isMap[i]++;
  }

  if (isMap[i] > maxCount) {
    mostFrequent = i;
    maxCount = isMap[i];
  }
}

console.log(`Value : ${mostFrequent}`);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function findTwoNumbersWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  for (let left = 0, right = arr.length - 1; left < right; ) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return []; // Return an empty array if no such pair is found
}

// Example Input
const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;

// Call the function and print the output
const indices = findTwoNumbersWithSum(inputArray, targetValue);
console.log(indices);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

// Example Input
const num1 = 10;
const num2 = 5;
const operator = "+";

// Call the function and print the output
const result = calculate(num1, num2, operator);
console.log(result); // Output: 15 (10 + 5 = 15)

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = '!@#$%^&*()_-+=[]{}|:;"<>,.?/~';

  const allChars =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// Example: Generate a random password of length 12
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentNumeral = romanNumerals[roman[i]];
    const nextNumeral = romanNumerals[roman[i + 1]];

    if (nextNumeral > currentNumeral) {
      result += nextNumeral - currentNumeral;
      i++; // Skip the next numeral since we have already accounted for it
    } else {
      result += currentNumeral;
    }
  }

  return result;
}

// Example Input
const romanNumeral = "IX";

// Call the function and print the output
const integer = romanToInt(romanNumeral);
console.log(integer);

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array should have at least two elements";
  }

  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "No second smallest element found";
  }

  return secondSmallest;
}

// Example Input
const newNumbers = [3, 1, 5, 2, 4];

// Call the function and print the output
const secondSmallest = findSecondSmallest(newNumbers);
console.log(secondSmallest);
