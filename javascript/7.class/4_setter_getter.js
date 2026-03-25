/*
    사원(Employee) 클래스 정의
    - 사원번호(#), 사원명, 나이를 입력받아 객체 생성
*/

class Employee{
    #empno;
    #name;
    #age;

    constructor(empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    // getter / setter
    getEmpno = () => {return this.#empno;}
    getName = () => {return this.name;}
    getAge = () => {return this.age;}

    setEmpno = (empno) => {this.#empno = empno;}
    setName = (name) => {this.name = name;}
    setAge = (age) => {this.age = age;}

    display = () => {console.log(this.#empno, this.name, this.age);
        }
    }
    let jinjin = new Employee();
    jinjin.setEmpno('0208');
    jinjin.setName('진진');
    jinjin.setAge(23);
    console.log(jinjin.getEmpno());
    console.log(jinjin.getName());
    console.log(jinjin.getAge());
    jinjin.display();

    jinjin.empno = '2893'; //empno 필드가 새롭게 추가됨!, empno, #empno 2개가 존재함
    console.log('jinjin.empno ==>', jinjin.empno);
    console.log(jinjin); 

    let nyong = new Employee('0930', '뇽', 25);
    nyong.display();

    let empList = [];
    // empList[0] = jinjin;
    // empList[1] = nyong;
    empList.push(jinjin);
    empList.push(nyong);
    console.log('empList.pop(jinjin) :: \n', empList.pop);
    console.log(empList);
    
    let empListObj = {};
    empListObj['jinjin'] = jinjin;
    empListObj['nyong'] = nyong;
    console.log(empListObj);
    