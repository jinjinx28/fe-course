/* DOM 객체 생성 후 객체 호출 */

window.addEventListener('DOMContentLoaded', () => {
    //검색하기 버튼 이벤트
    let search_content = document.querySelector('#search_content');
    let btnSearch = document.querySelector('#btnSearch');

    btnSearch.addEventListener('click', () => {
        if(search_content.value.trim() === '') {
            alert('검색할 내용을 입력해주세요.');
        } else {
            //검색 진행
        }
    });

    // 테이블 생성 함수
    createTable();

}); //window event

//JSON 데이터 가져오기
async function getJson() {
    let response = await fetch('../json/support.json');
    return (await response).json();
}

async function createTable() {
    let list = await getJson();
    // console.log('list =>', list);
    let output = `<table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>구분</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5">1 2 3 4 5  >></td>
                        </tr>
                    </tfoot>`;
    
}