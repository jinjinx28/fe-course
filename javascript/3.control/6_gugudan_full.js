// let dan = undefined

// for(dan=2; dan<10; dan++){
//     let output = "";

//     for(let i=1; i<10; i++){
//         // console.log(`${dan}*${i} = ${dan * i}`);
//         output += `${dan}*${i}=${dan*i}\t`
        
//     }
//     console.log(output);
    
// }

let start = 2;
let end = 10;
for(let i=1; i<10; i++){
    let output = "";
    for(let j=2; j<10; j++){
        output += `${j} x ${i} = ${j*i}\t`;
    }
    console.log(output);
}

/* 삼각형 별 찍기 */
for(let i=1; i<=5; i++){
    let output = '';
    for(let j=1; j<=i; j++){
        output +=`*`;
    }
    // output += `*`.repeat(i);
    console.log(output);
    
}

/* 삼각형으로 초록색 사과찍기 (세번째 줄만 빨간색 사과로 출력) */

for(let i=1; i<=5; i++){
    let output = "";

    for(let j=1; j<=i; j++){
        if ( i===3 ){
            output += '🍎';
        }else {
            output += `🍏`;
        }
    }
    console.log(output);
}
    
/* 정삼각형 별찍기 - repeat(반복횟수) 함수 이용 */
for(let i=1; i<=5; i++){
    let output = '';
    let space = '';
    space += ' '.repeat(5-i);
    output += `🍏`.repeat(i);
    console.log(space, output);
}

