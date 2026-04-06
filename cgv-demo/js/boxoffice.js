/* KOBIS, KMDB API를 활용한 박스 오피스 */

const kobis_key = `0b9b6c35fe9f88366306e9356d6668e1`;
const kmdb_key = `VEH21W26T702JJEV1F44`;

/* KOBIS API - 박스오피스 가져오기 */
async function getKobis() {
    let url = `	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${kobis_key}&targetDt=20260405`;
    console.log(url);

    let response = await fetch(url);
    return response.json();    
}


async function createBocoffice() {
    let kobis = await getKobis();
    let list = kobis.boxOfficeResult.dailyBoxOfficeList;
    console.log(kobis);

    // let idx = 0;
    // for(const movie of list) {
    //     if(idx < 5) {
    //         console.log(movie.movieNm);
    //     } else {
    //         break;
    //     }
    // }

    list.slice(0, 5).map((movie, idx) => {
        console.log(movie.movieNm);

    });
}

window.addEventListener('DOMContentLoaded', () => {
    createBocoffice();
});




