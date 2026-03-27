/*
    배열 객체에서 필터링을 진행한 후 Shallow Copy(얕은 복사) 진행 후 리턴
    - 배열객체.filter(callback)
*/

let strList = ['jinjin', 'nyong', 'nuri', 'friren'];

//이름이 6자 이상인 사람 필터링
let filterObj = strList.filter((str)=> str.length > 5);
console.log(`filterObj = ${filterObj}`);

let fruits = [
    {name : 'strawberry', emoji :'🍓' },
    {name : 'lemon', emoji :'🍋' },
    {name : 'coconut', emoji :'🥥' },
    {name : 'strawberry', emoji :'🍓' },
    {name : 'lemon', emoji :'🍋' },
    {name : 'coconut', emoji :'🥥' }
];

//strList에서 4자 이상인 이름만 필터링
let filterObject = strList.filter((str)=> str.length > 4);
console.log(`filterObj = ${filterObj}`)

//fruits 객체에서 lemon 객체를 출력
let lemon = fruits.filter((fruit) => fruit.name === 'lemon');
let lemonFind = fruits.find((fruit) => fruit.name === 'lemon');
console.log();
console.log(lemon);
console.log(lemonFind);
console.log(lemon[0].name, lemon[0].emoji);
console.log(lemonFind.name, lemonFind.emoji);

