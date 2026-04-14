import Logo from './header/Logo.jsx';
import MenuList from './commons/MenuList.jsx';
import ToggleButton from './header/ToggleButton.jsx';

export default function Header({data}) {
    //data 객체가 존재하는 경우에만 구조분해할당 진행!!
    // 구조분해 할당으로 반환하는 타입이 객체인 경우

    const [menus] = data || {};
    
    return(
        <header class="header">
            <Logo img="img/favicon.ico"
                alt="header-logo"
                style="header-logo-img"
                title="jinjin"
            />
            
            <MenuList menus={menus} style="header-menu-open"/>
            <ToggleButton />
        </header>
    )
}