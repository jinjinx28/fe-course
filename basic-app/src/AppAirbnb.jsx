import RoomAvatar from "./components/airbnb/RoomAvatar.jsx"

export default function App() {
    return (
        <RoomAvatar 
            img="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ3MTY3NjExNzY1ODY5NTI3NA==/original/c2911951-dcc5-4c3e-9079-27f60353df13.jpeg?im_w=1200"
            roomTitle="부산의 집"
            roomDate="5월 8일 ~ 10일"
            roomPrice="572,000"
            roomRating="5.0"
            isGuest={true}
            isLike={true}
            />
    )
}