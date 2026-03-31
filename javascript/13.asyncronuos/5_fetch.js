/*
    fetch(resource) : 데이터 파일을 호출하여 데이터를 가져오는 함수
    - JSON(JavaScript Object Notation) 파일을 호출
    - Web API 구조는 보통 JSON 형태
*/


const getJson = () => {
    fetch('http://127.0.0.1:5500/javascript/13.asyncronuos/data.json')
        .then(response => response.json())
        .then(jsonData => console.log(jsonData))
        .catch(error => console.log('error =>', error));
}

function getJson2() {
    fetch('http://127.0.0.1:5500/javascript/13.asyncronuos/data.json')
    .then((response) => {return response.json()})
    .then((jsonData) => {console.log('jsonData ==>', jsonData)})
    .catch((error) => {console.log('error =>', error)});
}

const getJson3 = async () => {
    let response = await fetch('http://127.0.0.1:5500/javascript/13.asyncronuos/data.json')
    console.log('response => \n', response);
    
}

function getJson4() {

}

getJson();
getJson2();
getJson3(); //pending = 대기 (Web API에 잇음)

