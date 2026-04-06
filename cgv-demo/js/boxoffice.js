/* KOBIS, KMDB API를 활용한 박스 오피스 */

const kobis_key = `0b9b6c35fe9f88366306e9356d6668e1`;
const kmdb_key = `VEH21W26T702JJEV1F44`;

/* KOBIS API - 박스오피스 가져오기 */
async function getKobis() {
    let date = new Date();
    let year = new String(date.getFullYear());
    let month = new String(date.getMonth()+1);
    let day = new String(date.getDate()-1);
    month = (month.length<2)? '0'.concat(month) : month;
    day = (day.length<2)? '0'.concat(day) : day;

    let today = year.concat(month).concat(day);

    // console.log(month.length);
    console.log(today);
    
    let url = `	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${kobis_key}&targetDt=${today}`;
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

 async function showList(list) {
    let slist = list.slice(0, 5).map( async (movie, idx) => {
        let movieNm = movie.movieNm;
        let openDt = movie.openDt;
        let audiAcc = movie.audiAcc;
        let poster = await getPoster(movie.movieNm, movie.openDt);
        // console.log(movie.movieNm, movie.openDt, poster);
        return {movieNm, openDt, audiAcc, poster}
    });  

    return await Promise.all(slist);
}

async function createBoxoffice() {
    let kobis = await getKobis();
    let list = kobis.boxOfficeResult.dailyBoxOfficeList;
    let outputList = await showList(list);
    // console.log('showList =>', outputList);

    let output = `
        <ul>
            ${
                outputList.map((movie) => `
                    <li>
                        <div>
                            <img src="${movie.poster}" 
                                alt="moviechart img"
                                width="200px">
                        </div>
                        <div><h4>${movie.movieNm}</h4></div>
                        <div><h5>누적관객수${parseInt(movie.audiAcc).toLocaleString()}</h5></div>
                    </li>
                `).join("")
            }
        </ul>
    `;
    console.log(output);
    document.querySelector('#boxoffice').innerHTML = output;
    
    
    // let showList = [];

    // let idx = 0;
    // for(const movie of list) {
    //     if(idx < 5) {
    //         console.log(movie.movieNm);
    //     } else {
    //         break;
    //     }
    // }
}

window.addEventListener('DOMContentLoaded', () => {
    createBoxoffice();
});




