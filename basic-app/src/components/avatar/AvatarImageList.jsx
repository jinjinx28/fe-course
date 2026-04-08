
import AvatarImage from "./AvatarImage.jsx"

export default function AvatarImageList({imgList}) {
    return(
        <div>{
                imgList.map((img, idx) => 
                    <AvatarImage img={item.img}
                                style={item.style}
                                key={idx} />
                )
            }
        </div>
    )
}


