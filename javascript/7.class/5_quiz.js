/**
 * 학생(Student) 클래스 정의
 * 필드 : #이름, #나이, #주소, 이모지
 * 메소드 : setter/getter, display
 */
let dataList = [
    { name: '홍길동', age: 20, address: '서울시', emoji: '🧑'},
    { name: '김철수', age: 21, address: '부산시', emoji: '🧑'},
    { name: '박영희', age: 22, address: '서울시', emoji: '👩'},
    { name: '박정민', age: 23, address: '인천시', emoji: '🧑'},
    { name: '홍길순', age: 24, address: '서울시', emoji: '👩'},
];

class Student{
    #name;
    #age;
    #address;
    #emoji;

    constructor(name, age, address, emoji) {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.#emoji = emoji;
    }

    getName = () => {return this.#name;}
    getAge = () => {return this.#age;}
    getAddress = () => {return this.#address;}
    getEmoji = () => {return this.#emoji;}

    setName = (name) => {this.#name = name;}
    setAge = (age) => {this.#age = age;}
    setAddress = (address) => {this.#address = taddress;}
    setEmoji = (emoji) => {this.#emoji = emoji;}

    display = () => {console.log(`이름 : ${this.#name}, 나이 : ${this.#age}, 주소 : ${this.#address}, 이모지 : ${this.#emoji}`);
    }
}

let s1 = new Student(name = '홍길동', age = 20, address = '서울시', emoji = '🧑')
let s2 = new Student(name = '김철수', age = 21, address = '부산시', emoji = '🧑')
let s3 = new Student(name = '박영희', age = 22, address = '서울시', emoji = '👩')
let s4 = new Student(name = '박정민', age = 23, address = '인천시', emoji = '🧑')
let s5 = new Student(name = '홍길순', age = 24, address = '서울시', emoji = '👩')

let student = [s1, s2, s3, s4, s5];

for(let i=0; i<student.length; i++){
    student[i].display();
}



