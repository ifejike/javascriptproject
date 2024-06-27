//Reverse a String

function reverseString(str) {
   
    let charArray = str.split('');
   
    let reversedArray = charArray.reverse();
    
    let reversedStr = reversedArray.join('');
    
    return reversedStr;
}

// Example usage
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);

console.log(reversedString); // Output: "!dlroW ,olleH"

//Count Characters
function countCharacters(str) {
   
    return str.length;
}

let testString = "Hello, World!";
let characterCount = countCharacters(testString);

console.log(characterCount); //prints 13


// Capitalize Words
function capitalizeWords(sentence) {
    
    let words = sentence.split(' ');
  
    let capitalizedWords = words.map(word => {
        
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    return capitalizedWords.join(' ');
}

// Example usage
let testSentence = "hello, world! this is a test sentence.";
let capitalizedSentence = capitalizeWords(testSentence);

console.log(capitalizedSentence);

/* Function Array
Find Maximum and Minimum*/

function findMax(arr) {
    
    return Math.max(...arr);
}

function findMin(arr) {
   
    return Math.min(...arr);
}

// Example 
let numbers = [3, 7, 2, 9, 5, 1, 8];

let maxValue = findMax(numbers);
let minValue = findMin(numbers);

console.log("Maximum value:", maxValue); 
console.log("Minimum value:", minValue); 

//Sum of Array 
function sumArray(arr) {
   
    return arr.reduce((sum, current) => sum + current, 0);
}

// Example 


let sum = sumArray(numbers);

console.log("Sum of array:", sum); 


// Filter Array
function filterArray(arr, condition) {
  
    return arr.filter(condition);
}

// Example condition functions
function isEven(num) {
    return num % 2 === 0;
}

function isGreaterThanFive(num) {
    return num > 5;
}

// Example


let evenNumbers = filterArray(numbers, isEven);
let numbersGreaterThanFive = filterArray(numbers, isGreaterThanFive);

console.log("Even numbers:", evenNumbers);
console.log("Numbers greater than five:", numbersGreaterThanFive);

/* Mathematical Functions

Factorial*/

function factorial(n) {
    
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
}

// Example 
let number = 5;
let result = factorial(number);

console.log(`Factorial of ${number} is ${result}`);

//Prime Number Check
function isPrime(n) {
    // Check for edge cases
    if (n <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    if (n <= 3) {
        return true; // 2 and 3 are prime numbers
    }
    // Check if n is divisible by 2 or 3
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    // Check for factors from 5 to sqrt(n)
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Example usage

console.log(`Is ${number} a prime number? ${result}`);

function generateFibonacci(n) {
    // Check if the number of terms is less than or equal to 0
    if (n <= 0) {
        return [];
    }
    // Initialize the first two terms of the Fibonacci sequence
    let fibSequence = [0];
    if (n > 1) {
        fibSequence.push(1);
    }
    // Generate the Fibonacci sequence up to n terms
    for (let i = 2; i < n; i++) {
        let nextTerm = fibSequence[i - 1] + fibSequence[i - 2];
        fibSequence.push(nextTerm);
    }
    return fibSequence;
}

// Example usage
let numberOfTerms = 10;
let fibonacciSequence = generateFibonacci(numberOfTerms);

console.log(`Fibonacci sequence up to ${numberOfTerms} terms:`, fibonacciSequence);