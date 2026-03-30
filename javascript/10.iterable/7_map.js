/*
    Map : key, value를 한 쌍의 데이터로 가지는 객체
    - set(key, value) : 데이터 추가
    - get(key) : 데이터 반환
    - has(key) : 데이터 체크
    - delete(key) : 데이터 삭제
*/

let fruitsMap = new Map();
fruitsMap.set('cherry', '🍒');
fruitsMap.set('lemon', '🍋');
fruitsMap.set('apple', '🍏');
console.log(fruitsMap, typeof fruitsMap);
console.log(fruitsMap.get('cherry'));
console.log(fruitsMap.get('lemon'));
console.log(fruitsMap.get('apple'));

if(fruitsMap.has('cherry')) {
    console.log(fruitsMap.get('cherry'));
} else {
    console.log('준비 중입니다.');
}

// true : 🍒 , false : 🍇
let emoji = (!fruitsMap.has('cherry'))? '🍒' : '🍇';
console.log(emoji);
    
        // console.log(fruitsMap.get('cherry'))
        //console.log('준비 중입니다.');

// 업데이트 시 set
// 데이터 없을 땐 : 추가 / 데이터 있을 땐 : 업데이트
fruitsMap.set('apple', '🍎');
console.clear();
console.log(fruitsMap);

// 삭제 delete(key)
// 데이터 없을 땐 : 추가 / 데이터 있을 땐 : 삭제
// apple 삭제
if (fruitsMap.has('apple')) {
    fruitsMap.delete('apple')
} else {
    fruitsMap.set('apple');
}
console.log(fruitsMap);

// entries()
let fruitsArray = fruitsMap.entries();
console.log(fruitsArray);



    
