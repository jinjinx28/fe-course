/*
    destructure object : 구조 분해 할당
    - 객체의 구조를 분해하여 변수에 자동으로 할당
*/

// 1. 배열 
let numbers = [1, 2, 3, 4, 5];
let aa = numbers[0];
let bb = numbers[1];

let [a, b, nlist] = numbers;
console.log(a, b, nlist);


// 2. 오브젝트 리터럴
console.clear();
let jin = { 
    name : '진진',
    age : 23,
    job : '개발자'
}

// let name = jin.name;
// let age = jin.age;
// let job = jin.job;

let {name, age, job} = jin;
console.log(name, age, job);


// 3. 오브젝트 리터럴을 반환하는 함수 
const createObj = () => {
    return {
        aname : 'cherry',
        color : 'red',
        emoji : '🍒'
    }
}
let {f1, f2, f3} = createObj();
// let price = 1000;
// let source = '서울';
let {aname, color, emoji, price=1000, source='서울'} = createObj();
console.clear();
console.log(f1, f2, f3);
console.log(aname, color, emoji, price, source);



