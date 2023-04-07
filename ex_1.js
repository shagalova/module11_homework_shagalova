const arr = [-3, -2, -1, 0, 1, 2, 3, null, NaN, undefined, "7"];
let arrNumber = arr.filter(function (arr) {
  if (Number.isFinite(arr)) {
    return true;
  }
});
console.log((arrNumber));
function countOfOdd(arrNumber) {
  let countOdd = 0;
  for (let i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] % 2 !== 0) {
            countOdd++;
        }
  }
        return countOdd;
}
countOfOdd(arrNumber);

function countOfEven(arrNumber) {
  let countEven = 0;
  for (let i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] % 2 === 0 && arrNumber[i] !== 0) {
            countEven++;
        }
  }
        return countEven;
}
countOfEven(arrNumber);

function countNull(arrNumber) {
  let countNull = 0;
  for (let i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] === 0) {
            countNull++;
        }
  }
        return countNull;
}
countNull(arrNumber);

console.log("Нечетных - " + (countOfOdd(arrNumber)) + "; " + "Четных - " + countOfEven(arrNumber) + "; " + "Нулей - " + countNull(arrNumber));



