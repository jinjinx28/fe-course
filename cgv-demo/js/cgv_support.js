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

}); //window event