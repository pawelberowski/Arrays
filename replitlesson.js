// const numbers = [];
// const words = new Array();

// console.log(typeof numbers);
// console.log(numbers instanceof Object);


// const vegetables = [['first inside'], 'Carrot', {}, 123, true];

// console.log(vegetables[0]); // Carrot
// console.log(vegetables[1]); // Tomato
// console.log(vegetables[2]); // Cabbage

// vegetables[0] = 'not carrot';
// let carrot = vegetables[0];

// carrot = 'not in the array'

// console.log(vegetables.push())

// console.log(vegetables[0][0])

// const arrayOfNumbers = [1, 2, 3];

// arrayOfNumbers.shift()

// console.log(arrayOfNumbers); // [0, 1, 2, 3, 4]


// arrayOfNumbers.push(4);

// console.log(arrayOfNumbers); // [1, 2, 3, 4]

// arrayOfNumbers.pop();

// console.log(arrayOfNumbers); // [1, 2, 3]
const vegetables = ['Carrot', 'Tomato', 'Cabbage', 'tomato'];
// let index = 0;

// while (index < 5) {
//   console.log('Hi!');
//   index = index + 1;
// }

// do {
//   console.log('Hi!');
//   index = index + 1;
// } while (false)

// for (let i = 0; i < 5; ++i) {
//   console.log(i);
// }
// let count = 0

// while (count < vegetables.length) {
//   console.log(vegetables[count]);
//   count += 1;
// }

// for (let i = 0; i < vegetables.length; i++) {
//   console.log(vegetables[i]);
// }

// const arrayOfNumbers = [{}, [], true];
// const sortedArrayOfNumbers = arrayOfNumbers.sort();
// console.log([{}, [], true].map(el => el.toString())); // [1, 2, 3, 4, 5];

const users =  [
    {
        name: 'Adam',
        heightInCm: 180
    },
    {
        name: 'Amanda',
        heightInCm: 168
    },
    {
        name: 'John',
        heightInCm: 191
    },
    {
        name: 'Dave',
        heightInCm: 176
    }
]


// firstUser 160
// seconf 180
function usersComparator(firstUser, secondUser) {
    return firstUser.heightInCm - secondUser.heightInCm; // return any negative number
}



// if (firstUser.heightInCm > secondUser.heightInCm) {
//   return 1; // return any positive number
// }
// if (firstUser.heightInCm === secondUser.heightInCm) {
//   return 0;
// }
// }

const array = []
function sort(comparator) {
    for (let i = 0; i < array.length; i++) {
        if(comparator(array[i], array[i + 1]) >= 0) {
            // not
        }
        if(comparator(array[i], array[i + 1]) < 0) {
            // shifts
        }
    }
}

const usersSortedByHeight = users.sort(
    usersComparator
);

console.log(usersSortedByHeight);