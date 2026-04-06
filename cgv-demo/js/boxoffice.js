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

/* KMDB API - 포스터 가져오기 */
async function getPoster(movieNm, openDt) {
    openDt = openDt.split('-').reduce((acc, cur) => acc + cur);
    // console.log('getPoster => ', movieNm, openDt);
    
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api`;
    url += `/search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${encodeURIComponent(movieNm)}`; 
    url += `&releaseDts=${openDt}&ServiceKey=${kmdb_key}`;

    let response = await fetch(url);
    let kmdb = await response.json();
    let posters = await kmdb?.Data?.[0]?.Result?.[0]?.posters?.split('|');      //?. = 있으면 감, 없으면 멈춤
    // console.log('result =>', posters[0]);

    return posters?.[0];
}

async function createBocoffice() {
    let kobis = await getKobis();
    let list = kobis.boxOfficeResult.dailyBoxOfficeList;
    console.log(kobis);
    // let showList = [];

    // let idx = 0;
    // for(const movie of list) {
    //     if(idx < 5) {
    //         console.log(movie.movieNm);
    //     } else {
    //         break;
    //     }
    // }

    let showList = list.slice(0, 5).map( async (movie, idx) => {
        let movieNm = movie.movieNm;
        let openDt = movie.openDt;
        let poster = await getPoster(movie.movieNm, movie.openDt);
        // console.log(movie.movieNm, movie.openDt, poster);
        return {movieNm, openDt, poster}
    });   //[{movieNm : 영화제목, openDt : 개봉일 , poster : 포스터}, {~}...]

    console.log('showList =>', showList);
    
}

window.addEventListener('DOMContentLoaded', () => {
    createBocoffice();
});




