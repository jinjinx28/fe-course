import style from './Avatar.module.css';
import people3 from '../../assets/people3.webp';

export default function AvatarImage(props) {
    return (
        //props = {img : 이미지 주소}
        <img src={props.img} className={style.avatar_img} alt="photo" />
    )
}