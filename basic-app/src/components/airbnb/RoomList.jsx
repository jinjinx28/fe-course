import RoomAvatar from "./RoomAvatar.jsx";

export default function RoomList() {
    //fetchData를 통해 list 가져오기!!
    return (
        <>
            {list.map((item, idx) => 
                <RoomAvatar
                        key={idx}
                        item={item}
                        // img={item.img}
                        // roomTitle={item.roomTitle}
                        // roomDate={item.roomDate}
                        // roomPrice={item.roomPrice}
                        // roomRating={item.roomRating}
                        // isGuest={item.isGuest}
                        // isLike={item.isLike}
                />
            )}
        </>
    )
}