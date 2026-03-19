/*
 call by reference : 데이터 중복 시 주소 복제
 - 값이 heap에 저장되어 있는 경우
*/

let name1 ='진진';
let name2 = name1; //call by reference
let name3 = new String ('진진');
let name4 = name3; //call by reference

console.log(name1, typeof name1);
console.log(name2, typeof name2);
console.log(name3, typeof name3);
console.log(name4, typeof name4);
console.log(name1 === name2);
console.log(name1 === name3);
console.log(name3 === name4);
