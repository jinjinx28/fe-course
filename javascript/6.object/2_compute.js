/*
    객체에 값을 추가하는 함수 정의, 모든 객체에서 사용할 수 있도록 일반화 시킴
    C (Create)
*/
function setValue(object, key, value) {
    object[key] = value;
}

// 2-1. 객체 값 출력
function getValue(object, key) {
    console.log(object[key]);
}

// 2-2. 객체 값 반환 - R (Read)
function getValue(object, key) {
    return object[key];
}

// 3. 객체 값 업데이트 - U (Update)
function updateValue(object, key, newValue) {
    object[key] = newValue
}

// 4. 객체 값 삭제 - D (Delete)
function deleteValue(object, deletekey) {
    delete object[deletekey];
}


const hong = {
    name : '진진',
    age : 23
}

const apple = {
    name : 'apple'
}

console.log(hong);
console.log(apple);

/************************************************/

// 1. property, value 추가
setValue(hong, 'address', '서울시 강남구');
setValue(hong, 'job', 'sw engineer');
setValue(apple, 'emoji', '🍎');

console.log();
console.log(hong);
console.log(apple);

// 2. property, value 가져오기
let hong_name = getValue(hong, 'name');
console.log(hong_name);

// 3. property 값 업데이트
updateValue(apple, 'emoji', '🍏');
console.log(getValue(apple, 'emoji'));

// 4. property 값 삭제
deleteValue(hong, 'address');
deleteValue(hong, 'job');
deleteValue(hong, 'name');

console.log();
console.log(hong);
console.log(apple);







