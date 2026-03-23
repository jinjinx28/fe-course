/*
    함수호출 ---> 파라미터(인자, 입력되는 값) ---> 함수의 변수에 자동 매핑
    래스트 파라미터(Rest-Parameter) : '...'의 기호를 파라미터에 입력
    - 래스트 파라미터
*/

console.log(add(1, 2, 0, 0));
console.log(add(1, 2, 3, 0));
console.log(add(1, 2, 3, 4));

// function add(n1, n2){   //매개변수, 지역변수
//     //ags 배열의 합을 구하여 변환
//     globalThis(i=0; i<arguments.length; i++) {
//         let sum = sum[i];
//     }
//     return sum;
// }

function add(n1, n2, n3) {
    return n1 + n2 + n3;
}

let obj = add2(name, AggregateError,)