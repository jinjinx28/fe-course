/*
    객체 CRUD 관리 모듈
*/
/*
    객체에 값을 추가하는 함수 정의, 모든 객체에서 사용할 수 있도록 일반화 시킴
    C (Create)
*/
export function setValue(object, key, value) {
    object[key] = value;
}

// 2-1. 객체 값 출력
export function getValue(object, key) {
    console.log(object[key]);
}

// 2-2. 객체 값 반환 - R (Read)
export function getValue(object, key) {
    return object[key];
}

// 3. 객체 값 업데이트 - U (Update)
export function updateValue(object, key, newValue) {
    object[key] = newValue
}

// 4. 객체 값 삭제 - D (Delete)
export function deleteValue(object, deletekey) {
    delete object[deletekey];
}