/*
    이름, 나이, 주소를 입력 받는 폼 생성
    - 각 폼에 유효성 체크 진행
    - 전송 버튼 클릭시 유효성 체크 진행
*/
import {useRef, useState} from 'react';

export default function UserInfo() {
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const addressRef = useRef(null);
    const [form, setForm] = useState({name : '', age : '', address : ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (nameRef.current.value === "") {
            alert("이름을 입력해주세요.");
            nameRef.current.focus();
        } else if(ageRef.current.value === "") {
            alert("나이를 입력해주세요.");
            ageRef.current.focus();
        } else if(addressRef.current.value === "") {
            alert("주소를 입력해주세요.");
            addressRef.current.focus();
        } else {
            // 서버 전송
            console.log('submit ==> ', form);
            
        }
    }

    // const handleReset = () => {
    //     setForm({name : '', age : '', address : ''});
    // }

    return(
        <div>
            <h1>UserInfo</h1>
            <form name="userInfoForm" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="name">이름</label>
                        {form.name === "" &&
                            <span style={{color : 'red', fontSize:'0.6rem'}}>이름을 입력해주세요</span>
                        } {/* 삼항연산자 */}
                        <div>
                            <input type="text" 
                                    name="name" 
                                    id="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    ref={nameRef} />
                        </div>
                    </li>
                    
                    <li>
                        <label htmlFor="age">나이</label>
                        {form.name === "" &&
                            <span style={{color : 'red', fontSize:'0.6rem'}}>나이를 입력해주세요</span>
                        }
                        <div>
                            <input type="text" 
                                    name="age" 
                                    id="age"
                                    value={form.age}
                                    onChange={handleChange}
                                    ref={ageRef} />
                        </div>
                    </li>
                    
                    <li>
                        <label htmlFor="address">주소</label>
                        {form.name === "" &&
                            <span style={{color : 'red', fontSize:'0.6rem'}}>주소를 입력해주세요</span>
                        }
                        <div>
                            <input type="text" 
                                    name="address" 
                                    id="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    ref={addressRef} />
                        </div>
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="button" onClick={() => setForm({name : '', age : '', address : ''})}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}