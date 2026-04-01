let key = `0b9b6c35fe9f88366306e9356d6668e1`;
let targetDt = '20260101';
const data_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;


const getJson = async () => {
    let response = await fetch(data_url);
    return response.json();
}

const show = async () => {
    // 1. JSON 데이터 가져오기
    let kobis = await getJson();
    console.log(kobis);
    
    // 2. 출력 데이터 생성 :DHTML
    let output = `
        <h1>${kobis.boxOfficeResult.boxofficeType}</h1>
        <h3>일자 : ${kobis.boxOfficeResult.showRange}</h3>
        <table border = 1>
            <tr>
                <th>순위</th>
                <th>영화제목</th>
                <th>개봉일</th>
                <th>당일 관객 수</th>
                <th>누적 관객 수</th>
                <th>누적 매출액</th>
            </tr>
        </table>
    `;
    
    // 3. 출력
    document.querySelector('#content').innerHTML = output;
}

window.addEventListener('DOMContentLoaded', () => {
    show();
})
