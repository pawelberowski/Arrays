// https://doc.clickup.com/24538860/d/h/qcvqc-2268/339e02d66c9de13

console.log('~~~~~~~~~~~~~ Get smallest number ~~~~~~~~~~~~')
function getSmallestNumberWithSort(numbersArray) {
    return numbersArray.sort(function (a, b){return a - b})[0];
}
console.log(getSmallestNumberWithSort([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumberWithSort([200, 25, 4, 123, 87])); // 4

function getSmallestNumberWithForLoop(numbersArray) {
    let smallest = numbersArray[0];
    for (let i = 1; i < numbersArray.length; i++) {
        if (smallest > numbersArray[i]) {
            smallest = numbersArray[i];
        }
    }
    return smallest;
}
console.log(getSmallestNumberWithForLoop([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumberWithForLoop([200, 25, 4, 123, 87])); // 4

console.log('~~~~~~~~~~~~~ Get squared numbers ~~~~~~~~~~~~')

function getSquaredNumbers(numbers) {
    let squaredNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        squaredNumbers.push(numbers[i] ** 2);
    }
    return squaredNumbers;
}
console.log(getSquaredNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquaredNumbers([6, 7, 8, 9, 10])); // [36, 49, 64, 81, 100]

const numbers = [1, 2, 3];
console.log(getSquaredNumbers(numbers)); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]

console.log('~~~~~~~~~~~~~ Get reversed string ~~~~~~~~~~~~')
function getReversedString(string) {
    return string.split('').reverse().join('');
}
console.log(getReversedString('Hello!')); // '!olleH'
console.log(getReversedString('Arrays')); // 'syarrA'

console.log('~~~~~~~~~~~~~ Is palindrome ~~~~~~~~~~~~')

function isPalindrome(string) {
    const cleanString = string.toLowerCase().replaceAll(' ', '');
    return cleanString === getReversedString(cleanString);
}
console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Was it a cat I saw')); // true
console.log(isPalindrome('Hello!')); // false


console.log('~~~~~~~~~~~~~ The end ~~~~~~~~~~~~')