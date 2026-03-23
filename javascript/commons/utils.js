/* 
데이터타입에 상관없이 add 함수가 정상적으로 실행되도록 문자 => 변환 하는 함수 생성
*/
export function toNumber(num1, num2){
    //숫자로 변환 후 반환
    return{num1 : parseInt(num1), num2 : parseInt(num2)}
}
