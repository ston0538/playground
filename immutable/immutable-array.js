// https://blog.agney.dev/immutable-array-operations/
/**
 * unshift
 * @description 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환한다.
 */
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5)); // 길이 반환
console.log(array1);

/**
 * pop
 * @description 배열에서 마지막 요소를 제거하고 해당 요소를 반환합니다. 배열의 길이를 변경합니다.
 */

const array2 = [1, 2, 3];

// console.log(array2.pop());
// console.log(array2);

function removeNumber(arr) {
  const result = [...arr.slice(0, arr.length - 1)];
  return result;
}
const imArray2 = removeNumber(array2);
console.log(imArray2);

/**
 * shift
 * @description 배열에서 첫번째 요소를 제거하고 제거된 요소를 반환합니다.. 배열의 길이를 변경합니다.
 */

const array3 = [1, 2, 3];

// console.log(array3.shift());
// console.log(array3);

function shiftNumber(arr) {
  const result = [...arr.slice(1)];
  return result;
}
const imArray3 = shiftNumber(array3);
console.log(imArray3);

/**
 * splice
 * @description 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
 */

const array4 = [1, 2, 4, 5];

// array4.splice(2, 0, 3);
// array4.splice(2);
// console.log(array4);

function removeNumbers(arr, index) {
  const result = [...arr.slice(0, index)];
  return result;
}

function insertNumber(arr, index, newNumber) {
  const result = [...arr.slice(0, index), newNumber, ...arr.slice(index)];
  return result;
}
const imArray4 = removeNumbers(array4, 2);
const imArray5 = insertNumber(array4, 2, 3);

console.log(imArray4);
console.log(imArray5);
