/*
    Avatar.jsx - 아바타이미지 + 이름
*/
import AvatarImage from "./AvatarImage.jsx";
import style from './Avatar.module.css';

export default function Avatar({name, img}) {
    return(
        <div className={style.avatar}>
            <AvatarImage img={img}/>
            <p>{name}</p>
        </div>
    )
}
