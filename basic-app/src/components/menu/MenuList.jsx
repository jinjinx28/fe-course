import Menu from "./Menu.jsx";
import style from "./Menu.module.css";

export default function MenuList({list}) {
    return(
        <ul className={style.menu_list}>
            {list.map((menu, idx) => 
                <li>
                    <Menu   key={idx}
                            title={menu.title} 
                            href={menu.href}
                            style={menu.style}/>
                </li>
            )}
        </ul>
    )
}