import Menu from "./components/menu/Menu.jsx";
import MenuList from "./components/menu/MenuList.jsx";
import style from "./components/menu/Menu.module.css";

export default function App() {
    const list = [
        {title : "로그인", href : "#", style : style.menu1},
        {title : "회원가입", href : "#", style : style.menu1},
        {title : "고객센터", href : "#", style : style.menu1},
        {title : "게시판", href : "#", style : style.menu1},
        {title : "MyCGV", href : "#", style : style.menu1},
    ]

    return(
        <>
            <div>
                <Menu title="Naver" 
                    href="http://www.naver.com"
                    style={style.menu1}/>
                <Menu title="Google" 
                    href="http://www.google.com"
                    style={style.menu2}/>
            </div>
            <MenuList list={list}/>
        </>
    )
}