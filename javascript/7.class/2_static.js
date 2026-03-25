/*
    static 상수, 메소드 정의 - 클래스 상수, 클래스 메소드
    static 키워드가 붙은 상수, 메소드
    - 호출시 : 클래스명.상수, 클래스명.메소드
    ✨ static이 붙은 상수, 메소드는 stack의 static 메모리 영역에 별도로 저장되므로, 객체 생성 전 호출 가능
*/

class Fruit {
    //Field
    static MAX_SIZE = 10;
    // name;    // 생략 가능
    // color;
    // emoji;

    //Construtor
    constructor(name, color, emoji) {
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }

    //Method
    static getName = () => {
        return this.name;
    }
    getName = () => {
        return this.name;
    }                       // 메모리 공간이 달라서 에러나지않음 (static은 스택에 나머지는 heap에)

    static create = (name, color, emoji) => {
        return new Fruit(name, color, emoji);
    }
}

let cherry = new Fruit('cherry', 'red', '🍒');
console.log(cherry);
console.log(Fruit.getName());   // 클래스명 출력
console.log(cherry.getName());  // cherry 출력

// create 함수로 레몬 객체 생성
let lemon = Fruit.create('lemon', 'yellow', '🍋');
console.log(lemon);
console.log(lemon.getName());


