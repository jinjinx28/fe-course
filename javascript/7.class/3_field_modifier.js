/*
    클래스의 필드에 선언되는 변수, 상수에 대한 접근 제한자
    변수, 상수 앞에 #을 붙이면 private으로 설정, 클래스 내에서만 접근 가능, 외부 접근 금지
    #이 붙지 않으면 public, 클래스 내부 접근 가능, 외부 접근도 가능
*/

class Person {
    #empno;
    name;
    age;
    
    constructor(empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    display = () => {
        console.log(this.#empno, this.name, this.age);     
    }

    setEmpNo = (empno) => {
        this.#empno =empno;
    }

    getEmpNo = () => {return this.#empno;}
}

let jinjin = new Person ('1234','진진', 23);
jinjin.display();
console.log(jinjin.name);
console.log(jinjin.age);
console.log(jinjin.empno);
jinjin.display();

//jinjin.empno = '4567'; // 4번 변경불가
console.log('---------- empno 변경 ----------');

jinjin.setEmpNo('2893')
console.log(jinjin.getEmpNo());

