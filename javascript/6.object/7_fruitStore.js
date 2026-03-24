// import {getObjects,
//         setObject,
//         Fruit

//         } from '../commons/object.js';

import * as store from '../commons/object.js';

// 1. store 생성
let fstore = store.getObjects();

// 2. 과일(객체) 생성
let cherry = new store.Fruit('cherry', '🍒');
let lemon = new store.Fruit('lemon', '🍋');

// 3. store 게시
store.setObject('cherry', cherry);
store.setObject('lemon', lemon);

// 4. store 삭제
store.deleteObject('cherry');
store.deleteObject('lemon');

console.log(fstore);


