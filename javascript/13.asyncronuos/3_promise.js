/*
    비동기 로직(미래의 작업)을 구현하는 객체
    - resolve : 작업 성공시 반환
    - reject : 작업 실패시 반환
    - Promise 객체 생성 
        : ex ) const 프로미스객체 = new Promise((resolve, reject) => {비동기식 로직 (미래의 작업)});
    - Promise 객체 호출 
        : ex ) 프로미스객체.then(성공시 callback).catch(실패시 callback);
*/