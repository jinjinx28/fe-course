/*
    이름, 나이, 주소를 입력 받는 폼 생성
    - 각 폼에 유효성 체크 진행
    - 전송 버튼 클릭시 유효성 체크 진행
*/
export default function UserInfo() {
    return(
        <div>
            <form>
                <ul>
                    <li>
                        <label htmlFor="name">이름</label>
                        <input type="text" 
                                name="name" 
                                id="name" />
                    </li>
                    
                    <li>
                        <label htmlFor="age">나이</label>
                        <input type="text" 
                                name="age" 
                                id="age" />
                    </li>
                    
                    <li>
                        <label htmlFor="address">주소</label>
                        <input type="text" 
                                name="address" 
                                id="address" />
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="submit">다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}