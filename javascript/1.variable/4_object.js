/*
 참조 데이터 타입 : 객체 (Object)
 - 배열(Array) : [데이터, 데이터 ..]
 - 객체(Object) : {'프로퍼티' : 데이터, '프로퍼티' : 데이터 ..}
 */

 let apple = null;
 apple = {
    'name' : 'apple', 
    'color' : 'red',
    'emoji' : '🍎' 

    // name : 'apple', 
    // color : 'red',
    // emoji : '🍎' 
 }
 console.log(typeof apple);
 console.log(apple);
 console.log(apple.name);
 console.log(apple.color);
 console.log(apple.emoji);

 // strawberry 객체 생성 후 타입, 객체, name, color, emoji를 콘솔 출력
 let strawberry = null;
 strawberry = {
    'name' : 'strawberry',
    'color' : 'pink',
    'emoji' : '🍓'
 }
 console.log(typeof strawberry);
 console.log(strawberry);
 console.log(strawberry.name);
 console.log(strawberry.color);
 console.log(strawberry.emoji);
 
 // 배열 선언시 동일한 데이터 타입과 공통적인 속성들을 저장하는 것이 좋음
let dessertList = null;
// dessertList = ['cake', '🍰', 100, 200, true];   /* 다양한 데이터 타입 저장 가능, 하지만 비추천 */
dessertList = ['🥞','🍰','🍩','🥨','🍨']
console.log(dessertList);
console.log('pancake :', dessertList[0]);
console.log('icecream :', dessertList[4]);
console.log('cake :', dessertList[1]);

console.log(dessertList.length);
console.log(dessertList[dessertList.length-1]);

// 객체타입을 요소로 하는 배열 생성
let dessertListObj = null;
dessertListObj = [apple, strawberry];
console.log(dessertListObj);        // 객체 생성 전에 작성하면 오류
console.log(dessertListObj[0].name);  
console.log(dessertListObj[1].emoji);  


 
 
 
 