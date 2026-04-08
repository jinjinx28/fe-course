import Avatar from "./Avatar";

export default function AvatarList({list}) {
    return(
        <div>
            {list.map((item) => 
                <Avatar img = {item.img} name={item.name} />
            )}
        </div>
    )
}