import Image from "../../common/Image.jsx";
import "./Airbnb.css"

export default function RoomAvatar() {
    
    return (
        <div>
            <Image img="../data/rimg1.webp" 
                    alt="Room Image"
                    className="room_img" />
        </div>
    )
}