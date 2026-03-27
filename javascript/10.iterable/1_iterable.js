/*
    Iterable(순회) Object : Iterable Protocol을 준수하는 객체
    for .. of 구문
    String, Array, Set, Map (클래스로 정의가 된 것들)
    ... (Spread Operator : 스프레드 연산자) - 블록 안에서 객체의 데이터를 전개함 (펼쳐놓음)
    ... (Rest Parameter) : 매개변수 모든 값을 배열로 저장 
    ... (Destructring Object : 구조분해 할당) : 객체를 분해한 후 변수에 할당 
*/
//String 객체 생성 후 for .. of 구분 사용
let strList = new String('Hello JavaScript!!');
for (let str of strList){
    console.log(str);
}

//Number 객체 생성 후 for..of 구문 사용(x)
//Number 클래스는 Iteration Protocol을 준수하지 않음
// let numbers = new Number(12345);
// console.clear();
// for (let number of numbers) {
//     console.log(number);
// }

//Array 객체 생성 후 for of 구문 사용
let numbers = [1, 2, 3, 4, 5];
console.clear();
for (let number of numbers) {
    console.log(number);
}

//forEach()
numbers.forEach((number) => console.log(`number = ${number}`));

//find() -3, findIndex() -3의 인덱스 주소
let findNum = numbers.find(number => number === 3 );
let findInx = numbers.find(number => number === 3 );
console.log(`findNumber = ${findNum}`);
console.log(`findIndex = ${findInx}`);

//filter() - 짝수만 반환
let evenNum = numbers.filter(number => !(number%2 === 0));
let oddNum = numbers.filter(number => (number%2 === 0));
console.log();
console.log(evenNum);
console.log(oddNum);

//map() - 모든 요소에 +10
let addNumbers = numbers.map(number => number+10);
console.log();
console.log(addNumbers);

