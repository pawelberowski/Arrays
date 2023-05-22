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

console.log('~~~~~~~~~~~~~ The end ~~~~~~~~~~~~')