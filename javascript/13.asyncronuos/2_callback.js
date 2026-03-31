/*
    callback : 함수의 인자에 입력되는 함수 로직, anonymous(무기명) 함수
    - setTimeout(callback, delay)
*/

function runDelay(callback, delay) {
    setTimeout(callback, delay);
}

runDelay(() => {
    console.log(`3초 후에 Tesk Queue에 저장!!`);
    
}, 3000);   //3초 후에 Tesk Queue 저장, 콜스택이 callback 함수 실행

runDelay(function() {
    console.log(`Tesk Queue에 바로 저장!!`);
    
});   //Tesk Queue 바로 저장, 콜스택이 callback 함수 실행

runDelay(() => {
    console.log(`1초 후에 Tesk Queue에 저장!!`);
    
}, 1000);   //1초 후에 Tesk Queue 저장, 콜스택이 callback 함수 실행

console.log('--------------- 프로그램 종료 ---------------');
