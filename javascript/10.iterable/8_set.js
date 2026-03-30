/*
    Set : 다양한 데이터 저장
    - add() : 데이처 추가
    - has() : 데이터 체크
    - delete() : 데이터 삭제
    - 중복된 데이터는 자동 필터링 
*/

let mySet = new Set();
mySet.add(100);
mySet.add('진진');
mySet.add({name : 'cherry'});
mySet.add([1, 2, 3, 4, 5]);
mySet.add('100');   
mySet.add(100);     // 중복된 데이터는 자동 필터링  
console.log(mySet);
console.clear();

// 데이터 출력
for(const value of mySet){
    console.log(value);
    
}
console.clear();
console.log('진진 검색 start ------');

if(mySet.has('진진')) {
    for(const value of mySet){
        if(mySet.has('진진')) 
            console.log(value); 
    }
}
console.log(mySet.has('진진'));

// 진진이 존재하면 삭제
if(mySet.has('진진')) {
    mySet.delete('진진');
}
console.log(mySet);

// 모든 요소 삭제
mySet.clear();
console.log(mySet);
