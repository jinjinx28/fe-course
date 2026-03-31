//최초 호출되는 이벤트 함수 : window.addEventListener();
window.addEventListener('DOMContentLoaded', () => {
    show();
});

//getJson 함수 생성

const data_url = 'http://127.0.0.1:5500/javascript/13.asyncronuos/fruits.json';

const getJson = async () => {
    let response = await fetch(data_url);
    return response.json();
}

//show 함수 생성
const show = async () => {
    let jsonData = await getJson();
    console.log('jsonData =>', jsonData);
    //return jsonData; //Promise 타입으로 리턴

    let output = `
        <h1>Fruits List</h1>
    `;

    document.querySelector('#content').innerHTML = output
}

// show();