/*
 * forEach 메소드는 Iterator 심볼 객체를 상속한 객체에서 사용됨
    - 배열객체.상속객체.forEach(callback)
    - Array(배열).forEach()
 */

let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((item, idx)=>console.log(`numbers[${idx}] = ${item}`));
console.clear();

let fruits = new Array('🍓', '🍑', '🍒', '🍋', '🥥');
fruits.forEach(item => {console.log(item);});

// 🍒 > 🍏로 변경, 출력
fruits.forEach((item, idx) => {
    if(item === '🍒'){
        fruits.splice(idx, 1, '🍏');
    }
});
console.log(fruits);

// 변경, 출력, 확장 for..of
let idx = 1;
for(const item of fruits) {
   if(item === '🍑') {
    fruits.splice(idx, 1, '🥝');
   }
}
console.log(fruits);
