/*
    전역 함수로 최상의 객체인 Widow 객체에서 호출되는 함수
    - window.함수명
    - 객체명을 생략 가능
    - widow.alret(), window.comfirm(), Number.parseInt(window.parseInt) .. 

    전역객체
    - encodeURI(),decodeURI()
*/
let number = '123.4567';
// let intNumber = Number.parseInt(number); - 브라우저에서만 실행
let intNumber = window.parseInt(number);
console.log('number = ',number, typeof number);
console.log('intNumber = ', intNumber, typeof intNumber);
console.log('intNumber2 = ', intNumber, typeof intNumber2);

//RUI 주소 인코딩, 디코딩
let uri = 'http://www.naver.com?name=진진'
let encodeUri = encodeURI(uri);
let decodeUri = decodeURI(encodeUri);

console.log(uri);
console.log(encodeUri);
console.log(decodeUri);






