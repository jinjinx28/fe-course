
import Image from "../../common/Image.jsx";
import "./Airbnb.css";

export default function RoomAvatar({ pk, img, roomTitle, roomDate, roomPrice, roomRating, isGuest, isLike }) {
    return (
        <div className="room_container"> 
            <div className="img_box">
                <Image 
                    img={img}
                    alt={roomTitle}
                    className="room_img" 
                />
                {isGuest && <span className="guest_preference">게스트 선호</span>}
                {isLike && <span className="like">🤍</span>}
            </div>
            
            <p className="room_title"><strong>{roomTitle}</strong></p>
            <p className="room_date">{roomDate}</p>
            
            <div className="room_price">
                <p>총액 ₩{roomPrice}</p>
                <p>⭐ {roomRating}</p>
            </div>
        </div>
    );
}