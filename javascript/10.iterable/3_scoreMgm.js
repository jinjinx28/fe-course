//성적관리 프로그램

function createList(){
    return new Array();
}

function createScore(scoreList, name, kor, eng, math) {
    scoreList.push({name, kor, eng, math});
}
function searchName(scoreList, name) {
    return scoreList.find(score => score.name === name);
}
// function searchScore(scoreList){
//     return scoreList.filter(score => score.kor >= 90);
// }
function searchScore(scoreList, subject, score){
    return scoreList.filter(item => item[subject] >= score);
}
function updateScore(scoreList, subject, score) {
    return scoreList.map((item) => (item[subject]<100) ? {...item, subject:item[subject] + score}: item);
} //객체 새로 생성

let scoreList = createList();
createScore(scoreList, '진진', 100, 100, 100);
createScore(scoreList, '뇽', 80, 100, 80);
createScore(scoreList, '누리', 100, 100, 90);
createScore(scoreList, '카나에', 90, 100, 90);
console.log(scoreList.length);
console.log(scoreList);

//누리 검색
console.log(searchName(scoreList, '누리'));

//국어 점수가 90점 이상인 학생 조회
console.log(`serchScore :: `, searchScore(scoreList, 'kor', 90));

//영어점수가 70점 이상인 학생 검색
console.log(`serchScore :: `, searchScore(scoreList, 'eng', 70));

//모든 학생
