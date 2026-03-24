
// 객체 생성 모듈

let objects = {};   // {hong : {}, kim : {}}

export function getObjects() {  //전체 리스트
    return objects;
}

export function createObject(objectName) {  //객체 생성
    return objects[objectName] = {};
}

export function deleteObject(objectName) {  //객체 삭제
    delete objects[objectName];
}

export function getObject(objectName) {
    return objects[objectName];
}

//객체 CRUD 관리 모듈
/* 객체에 값을 추가하는 함수 정의, 모든 객체에서 사용할 수 있도록 일반화 시킴
    C (Create) */
export function setValue(object, key, value) {
    object[key] = value;
}

// 2-1. 객체 값 출력
// export function getValue(object, key) {
//     console.log(object[key]);
// }

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

export function setObject(key, value) {
    objects[key] = value;
}

// 생성자 함수를 이용한 객체 CRUD

 export function Fruit(name, emoji) {
    this.name = name;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.emoji);
    }
}