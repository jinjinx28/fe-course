window.addEventListener('DOMContentLoaded', () => {
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let idMsg = document.querySelector('#idMsg');
    let pwdMsg = document.querySelector('#pwdMsg');

    id.addEventListener('input', () => {
        if (id.value.trim() !== '') {
            idMsg.style.display = 'none';
        }
    });
});


/* loginCheck() - 로그인 유효성 체크 함수*/

const loginCheck = () => {
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let idMsg = document.querySelector('#idMsg');
    let pwdMsg = document.querySelector('#pwdMsg');

    // console.log(id, pwd);
    if (id.value === ''){
        idMsg.textContent = '아이디를 입력해주세요.';
        idMsg.style.fontSize = '12px';
        idMsg.style.color = 'red';
        id.focus();
    } else if(pwd.value === '') {
        pwdMsg.textContent = '비밀번호를 입력해주세요.';
        pwdMsg.style.fontSize = '12px';
        pwdMsg.style.color = 'red';
        pwd.focus();
    } else {
        // 서버 전송 작업
        console.log('서버 전송', id.value, pwd.value);
        
    }
}