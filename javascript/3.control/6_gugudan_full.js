// let dan = undefined

// for(dan=2; dan<10; dan++){
//     let output = "";

//     for(let i=1; i<10; i++){
//         // console.log(`${dan}*${i} = ${dan * i}`);
//         output += `${dan}*${i}=${dan*i}\t`
        
//     }
//     console.log(output);
    
// }

for(let i=1; i<10; i++){
    let output = "";
    for(let j=2; j<10; j++){
        output += `${j} x ${i} = ${j*i}\t`;
    }
    console.log(output);
}