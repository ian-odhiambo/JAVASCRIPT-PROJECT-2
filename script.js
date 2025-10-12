//string manipulation functions
//1. REVERSE A STRING
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return reversed;
}


const string = "Blue Berry";
const reversedString = reverseString(string);

console.log("Original string:", string); 
console.log("Reversed string:", reversedString); 

//2.a function that counts the number of characters in a string.
function countCharacters(str) {
    return str.length;
}

const myString = "JavaScript";
const characterCount = countCharacters(myString);

                 
console.log("Number of characters:", characterCount); 

//a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}


const testSentence = "hello world this is javascript";
const result = capitalizeWords(testSentence);

console.log("Original:", testSentence);  

console.log("Capitalized:", result);

//ARRAY FUNCTIONS
//functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

const array1 = [4, 9, 2, 7, 5];
const array2 = [15, 3, 8, 12, 6];
const array3 = [-2, -8, -1, -5];

console.log("array 1:", array1);
console.log("Maximum value:", findMax(array1)); 
console.log("Minimum value:", findMin(array1)); 

console.log("array 2:", array2);
console.log("Maximum value:", findMax(array2)); 
console.log("Minimum value:", findMin(array2)); 

console.log("array 3:", array3);
console.log("Maximum value:", findMax(array3)); 
console.log("Minimum value:", findMin(array3));

//a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

const numbers = [1, 2, 3, 4, 5];
const resultOfSum = sumArray(numbers);

console.log("Array:", numbers);    
console.log("Sum:", resultOfSum);      

//Implement a function that filters out elements from an array based on a given condition
//condition:using the high array filter function on my list of things i need to get done in the day, the output should be in such a way that from the objects that are stored within our array as our items, the output should be in such a way that all the object (numbers to be filtered out separately from the other objects likewise do it on the other objects too ) 
const myList = [
  {
    number: 1,
    task: "Take Out trash",
    isCompleted: true,
  },
  {
    number: 2,
    task: "Meeting with boss",
    isCompleted: true,
  },
  {
    number: 3,
    task: "Dentist appt",
    isCompleted: false,
  },
];
//filtering out the completed task
const itemIscompleted = myList.filter(function (item) {
  console.log(item.isCompleted);
});

//filtering out only the tasks
const itemTask = myList.filter(function (item2) {
  console.log(item2.task);
});

//filtering out the number
const itemNumber = myList.filter(function (item3) {
  console.log(item3.number);
});

//MATHEMATICAL FUNCTION
//Write a function to calculate the factorial of a given number.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


const num = 5;
const factorialresult = factorial(num);

console.log("Number:", num);      
console.log("Factorial:", factorialresult);    

//a function that checks whether a number is prime or not

function isPrime(n) {
    if (n <= 1) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}

// Using 17 as our argument
const Number = 17;
const argumentresult = isPrime(Number);

console.log("Number:", Number);        
console.log("Is prime?", argumentresult);      

function fibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    if (terms === 2) return [0, 1];
    
    const sequence = [0, 1];
    
    for (let i = 2; i < terms; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    
    return sequence;
}

// Implement a function to generate the Fibonacci sequence up to a given number of terms.
console.log("=== Testing Fibonacci Function ===");

// Argument 1: 0 terms
const arg1 = 0;
console.log(`\nArgument: ${arg1}`);
console.log(`Result: [${fibonacci(arg1)}]`);
console.log(`Explanation: terms <= 0 returns empty array`);

// Argument 2: 1 term
const arg2 = 1;
console.log(`\nArgument: ${arg2}`);
console.log(`Result: [${fibonacci(arg2)}]`);
console.log(`Explanation: terms === 1 returns [0]`);

// Argument 3: 2 terms
const arg3 = 2;
console.log(`\nArgument: ${arg3}`);
console.log(`Result: [${fibonacci(arg3)}]`);
console.log(`Explanation: terms === 2 returns [0, 1]`);

// Argument 4: 5 terms
const arg4 = 5;
console.log(`\nArgument: ${arg4}`);
console.log(`Result: [${fibonacci(arg4)}]`);
console.log(`Explanation: Builds sequence: 0, 1, (0+1)=1, (1+1)=2, (1+2)=3`);

// Argument 5: 8 terms
const arg5 = 8;
console.log(`\nArgument: ${arg5}`);
console.log(`Result: [${fibonacci(arg5)}]`);
console.log(`Explanation: Full sequence: 0,1,1,2,3,5,8,13`);