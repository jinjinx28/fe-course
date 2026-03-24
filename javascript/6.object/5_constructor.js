/*
    생성자 함수를 통한 객체 생성
    - 객체의 틀을 이용하여 다수의 객체 생성하는 함수
*/

// Object Literal
// const Fruit = {
//     name : '사과',
//     emoji : '🍏'
// }

// 객체 틀 정의 => 생성자 함수로 생성됨
// 사과, 레몬, 체리 => name, color, emoji
function Fruit(name, color, emoji) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.color, this.emoji);
        
    }
}
let apple = new Fruit('apple', 'green', '🍏');
let lemon = new Fruit('lemon', 'yellow', '🍋');
let cherry = new Fruit('cherry', 'red', '🍒');

console.log(apple.display());
console.log(lemon.display());
console.log(cherry.display());

console.log(apple.name, apple.color, apple.emoji);

// 성적 리스트 관리
// 진진, 스미스, 뇽, 누리, 유리코 학생의 성적 관리
// name, kor, eng, math의 필드값을 가지는 성적 템플릿
// 생성자 함수명 : Score
function Score (name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    
    this.display = () => {
        console.log(this.name, this.kor, this.eng, this.math);}
}

// 성적리스트 객체 생성 함수
function createScorList(st1, st2, st3, st4, st5) {
    return {st1, st2, st3, st4, st5} 
}

// 진진, 스미스, 뇽, 누리, 유리코 학생 성적 관리
let jinjin = new Score('진진', 100, 90, 100); //let hong = Score()
let smith = new Score('스미스', 100, 70, 100); //let hong = Score()
let nyong = new Score('뇽', 80, 90, 100); //let hong = Score()
let nuri = new Score('누리', 100, 50, 90); //let hong = Score()
let yuriko = new Score('유리코', 90, 70, 80); //let hong = Score()

let scoreList = createScorList(jinjin, smith, nyong, nuri, yuriko);
console.log();

jinjin.display();
smith.display();
nyong.display();
nuri.display();
yuriko.display();

console.log(scoreList);

// 생성자 특징 : 첫 글자 대문자
