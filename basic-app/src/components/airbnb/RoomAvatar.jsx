import Image from "../../common/Image.jsx";
import "./Airbnb.css"

export default function RoomAvatar({img, roomTitle, roomDate, roomPrice, roomRating, isGuest, isLike}) {
    
    return (
        <div className="room_container">
            <Image img={img} 
                    alt="Room Image"
                    className="room_img" />
                
            <span className="guest_preference">게스트 선호</span>
            <span className="like">🤍</span>

            <p className="room_title">{roomTitle}</p>
            <p className="room_date">{roomDate}</p>

            <div className="room_price">
                <p>총액 : {roomPrice}</p>
                <p>🌟{roomRating}</p>
            </div>
        </div>
    )
}