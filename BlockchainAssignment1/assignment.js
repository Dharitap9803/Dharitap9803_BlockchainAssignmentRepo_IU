// Q1.----------------------------------------------------------
// Function to check if two strings are anagrams
function isAnagram(str1, str2){
    // Remove non-alphanumeric characters and convert to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();

    // Check if lengths are different
    if(str1.length!==str2.length){return false}

    // Sort characters in both strings and compare
    let sortedstr1 = str1.split('').sort().join();
    let sortedstr2 = str2.split('').sort().join();

    return sortedstr1===sortedstr2;
}
console.log("\nQuestion 1:-")
console.log(isAnagram('listen','silent')); 
console.log(isAnagram('hello','world')); 
//-----------------------------------------------------------------


//Q2.----------------------------------------------------------------
// Function to calculate total amount spent by category from a list of transactions
function calculateTotalSpentByCategory(transactions) {
    const categoryTotals = {};

    // Iterate through each transaction
    transactions.forEach(transaction => {
        const { category, amount } = transaction;

        // Initialize category total if it doesn't exist
        if (!categoryTotals[category]) {
            categoryTotals[category] = 0;
        }

        // Add the amount to the category total
        categoryTotals[category] += amount;
    });

    // Convert the category totals to an array of objects
    answer = Object.keys(categoryTotals).map(category => ({
        category: category,
        totalSpent: categoryTotals[category]
    }));
    return answer;
}
const transactions = [
    { category: 'Groceries', amount: 70 },
    { category: 'Travel', amount: 150 },
    { category: 'Groceries', amount: 30 },
    { category: 'Utilities', amount: 100 },
    { category: 'Travel', amount: 85 }
];
console.log("\nQuestion 2:-")
console.log(calculateTotalSpentByCategory(transactions));
//-----------------------------------------------------------------


//Q3.----------------------------------------------------------------
// Function to find the largest element in an array
function findLargestElement(numbers){
    if(numbers.length===0){
        throw new Error("Array is empty");
    }
    return Math.max(...numbers)
}

numbers = [45,78,12,67,90];
answer = findLargestElement(numbers);
console.log("\nQuestion 3:-")
console.log("Largest number = "+answer);
//-----------------------------------------------------------------


//Q4.----------------------------------------------------------------
// Function to check if a string is a palindrome
function isPalindrome(str){
    // Remove non-alphanumeric characters and convert to lowercase
    cleanStr = str.replace("/[^a-zA-Z0-9]/g","").toLowerCase();
    // Reverse the string
    reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr===reverseStr;
}
console.log("\nQuestion 4:-")
console.log(isPalindrome("madam")) 
console.log(isPalindrome("apple")) 
//-----------------------------------------------------------------


//Q5.----------------------------------------------------------------
// Function to calculate the time taken to perform a summation up to n
function calculateTime(n){
    const startTime = performance.now();

    // Simple summation loop
    sum = 0
    for(let i = 1; i <= n; i++){
        sum+=1;
    }

    const endTime = performance.now();

    // Calculate the total time taken in seconds
    const totalTime = (endTime-startTime)/1000;
    return totalTime;
}
console.log("\nQuestion 5:-")
console.log("Total time = "+calculateTime(5000));
//-----------------------------------------------------------------


//Q6.----------------------------------------------------------------
// Function to count the number of vowels in a string
function countVowels(str){
    const vowels = 'aeiou';

    // Remove non-alphabetic characters and convert to lowercase
    cleanStr = str.replace(/[^a-zA-Z]/g,"").toLowerCase()

    let totalVowels = 0;
    
    // Iterate through the string and count vowels
    for (const char of cleanStr) {
        if (vowels.includes(char)) {
            totalVowels++;
        }
    }

    return totalVowels;
}
console.log("\nQuestion 6:-");
console.log("Total vowels = "+countVowels("Programming is fun")); 
//-----------------------------------------------------------------


//Q7.----------------------------------------------------------------
// Function to calculate the sum of all elements in an array
function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum+=num;
    }
    return sum;
}
numbers = [9,45,23,67,11];
console.log("\nQuestion 7:-")
console.log("Total sum of array = "+sumArray(numbers));
//-----------------------------------------------------------------


//Q8.----------------------------------------------------------------
// Function to filter out even numbers from an array
function filterEvenNumbers(numbers){
    const evenNum = [];
    for(const num of numbers){
        if(num%2 === 0){
            evenNum.push(num);
        }
    }
    return evenNum;
}
numbers = [13,24,35,46,57,68]
console.log("\nQuestion 8:-")
console.log("Even numbers = "+filterEvenNumbers(numbers))
//-----------------------------------------------------------------


//Q9.----------------------------------------------------------------
// Function to find the smallest element in an array
function findSmallestElement(numbers){
    
    if(numbers.length===0){console.log("Array is empty");}

    return Math.min(...numbers);
}
numbers = [76,25,45,11,89];
console.log("\nQuestion 9:-");
console.log(findSmallestElement(numbers) + " is the smallest")
//-----------------------------------------------------------------


//Q10.----------------------------------------------------------------
// Function to reverse a string
function reverseString(str){

    return str.split('').reverse().join('');
}

console.log("\nQuestion 10:-");
console.log(reverseString("JavaScript"))
//-----------------------------------------------------------------


//Q11.----------------------------------------------------------------
// Function to calculate the nth Fibonacci number using recursion
function fibonacci(n){
    if (n===0) return 0;
    if (n===1) return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log("\nQuestion 11:-");
console.log(fibonacci(8)); 
//-----------------------------------------------------------------


//Q12.----------------------------------------------------------------
// Function to remove duplicates from an array
function removeDuplicates(arr){
    newArr = [];
    for(const a of arr){
        if(newArr.includes(a)){}
        else{newArr.push(a)}
    }
    return newArr;
}
arr = [22,35,67,22,35,89];
console.log("\nQuestion 12:-");
console.log(removeDuplicates(arr));
//-----------------------------------------------------------------


//Q13.----------------------------------------------------------------
// Function to count the occurrences of a character in a string
function countOccurrences(str,char){

    // Remove non-alphabetic characters and convert to lowercase
    const strLow = str.replace(/[^a-zA-z]/g,"").toLowerCase();
    const charLow = char.toLowerCase();
    let count = 0;
    for(const s of strLow){
        if(s === charLow){
            count++
        }
    }
    return count;
}
str = "JavaScript is a powerful language";
char = "a";
console.log("\nQuestion 13:-");
console.log(countOccurrences(str,char));
//-----------------------------------------------------------------


//Q14.----------------------------------------------------------------
// Function to find common elements between two arrays
function findCommonElements(arr1,arr2){
    const set1 = new Set(arr1);

    // Filter elements that are in both arrays
    const commonElements = arr2.filter(element => set1.has(element));
    return commonElements;
}
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [5, 7, 11, 13, 15];
console.log("\nQuestion 14:-")
console.log(findCommonElements(arr1, arr2));
//-----------------------------------------------------------------


//Q15.----------------------------------------------------------------
// Function to sort an array of strings alphabetically
function sortStrings(arr){
    sortArr = arr.sort();
    return sortArr;
}
arr = ['m','a','z','e','b','x','h','n'];
console.log("\nQuestion 15:-");
console.log(sortStrings(arr));
//-----------------------------------------------------------------
