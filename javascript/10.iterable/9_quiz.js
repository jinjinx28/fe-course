/*
    중복된 배열 객체를 입력받아, 중복을 제거한 후 출력하는 함수 생성
*/

function filter(array) {
    return new Set(array);
}
let numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
console.log(numbers);
console.log(filter(numbers));
console.log(filter(['진진', '뇽', '누리', '라떼']));

let mySet = new Set();
mySet.add(100);
mySet.add('진진');

let myArray = new Array(mySet);
console.log(myArray);
console.log(myArray[0]);


