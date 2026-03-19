/*
ES6 기준의 문법 형식 적용
변수 : 데이터를 메모리 저장하는 공간
변수 선언하는 키워드 : var, let, const(상수)

- var를 사용하여 진행하는 경우, 중복된 변수가 사용될 수 있으므로 권장하지않음
- let 변수 선언, 데이터 수정 가능
- const 상수 선언, 선언한 데이터 수정 불가능

문법 : [변수선언 키워드] 변수명 = 데이터;
*/ 

let number = 100;
number = 'hello';
number = 200;
console.log(number);

let number2 = 100;
number2 = 'hello';
console.log(number2);

// name이라는 변수에 '진진' 데이터 저장
let name = '진진';
let name2 = '진진';
console.log('name = ', name, 'name2 = ', name2);

// number 변수에 정수 100을 저장
number = 100;
console.log('number = ', number);

// DB 연동 ( 비동기식처리 )

// flag 변수에 true 값 저장
let flag = true;
console.log(flag);

// cname 변수에 상수로 '뇽뇽' 저징
const cname = '뇽뇽';
console.log(cname);