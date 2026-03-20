/*
    중첩 for문

    for(초기값; 조건식; 증가값;) {     // 행 기준
        for(초기값; 조건식; 증가값;){  // 열 기준
            실행문;
        }
            한 행을 개행하는 실행문;
    }
*/

/*
    2행 3열의 테이블 생성 후 데이터 출력
    1(1, 1) 2(1, 2) 3(1, 3)
    4(2, 1) 5(2, 2) 6(2, 3)
*/

// for(let i=1; i<3; i++){
//     for(let j=1; j<4; j++){
        // console.log(count++, '\t');
        // 한 행의 열을 이어서 출력하도록 변수 정의
//         output = output + `${count++}(${i}, ${j} \t)`;
//     }
//     console.log(output);
    
// }

let count = 1; // 숫자를 세기 위한 변수 선언

for (let i = 1; i <= 2; i++) { // 2행까지
    let output = ""; 
    for (let j = 1; j <= 3; j++) { // 3열까지
        // console.log(count++, '\t');
        // 한 행의 데이터를 문자열로 쌓기
        output += `${count++}(${i}, ${j})\t`;
    }
    
    console.log(output);
}