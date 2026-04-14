import AvatarImage from "../commons/AvatarImage.jsx"

export default function Logo({img, alt, style, title}) {
    return(
        <div className="header-logo">
            <AvatarImage 
                    img={img}
                    alt={alt}
                    style={style} />
            <h1 class="header-logo-title">{title}</h1>
        </div>
    )
}