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

console.log('~~~~~~~~~~~~~ Count letters ~~~~~~~~~~~~')

function countLetters(string) {
    const letters = string.toLowerCase().replaceAll(' ','').split('');
    let lettersObject = {};
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] in lettersObject) {
            lettersObject[letters[i]] += 1;
        } else {
            lettersObject[letters[i]] = 1;
        }
    }
    return lettersObject;
}

const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

console.log(lettersObject);
// {
//   a: 1
//   b: 1
//   c: 1
//   d: 1
//   e: 3
//   f: 1
//   g: 1
//   h: 2
//   i: 1
//   j: 1
//   k: 1
//   l: 1
//   m: 1
//   n: 1
//   o: 4
//   p: 1
//   q: 1
//   r: 2
//   s: 1
//   t: 2
//   u: 2
//   v: 1
//   w: 1
//   x: 1
//   y: 1
//   z: 1
//

console.log('~~~~~~~~~~~~~ Get age difference ~~~~~~~~~~~~')

const peopleArray = [
    {
        name: 'Adam',
        age: 20
    },
    {
        name: 'Amanda',
        age: 5
    },
    {
        name: 'John',
        age: 75
    },
    {
        name: 'Dave',
        age: 15
    }
];

function getYoungestPerson(people) {
    let youngest = people[0].age;
    for (let i = 1; i < people.length; i++) {
        if (youngest > people[i].age) {
            youngest = people[i].age;
        }
    }
    return youngest;
}

function getOldestPerson(people) {
    let oldest = people[0].age;
    for (let i = 1; i < people.length; i++) {
        if (oldest < people[i].age) {
            oldest = people[i].age;
        }
    }
    return oldest;
}

function getAgeDifference(people) {
    return getOldestPerson(people) - getYoungestPerson(people)
}

console.log(getAgeDifference(peopleArray)); // 70

console.log('~~~~~~~~~~~~~ The end ~~~~~~~~~~~~')