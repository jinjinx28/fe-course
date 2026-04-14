export default function Image({img, alt, w, h, className}) {
    return(
        <img src={img} 
            alt={alt}
            style={{
                
                width : w ? w : undefined, 
                height : h ? h : undefined
            }}
            className={className} 
        />
    )
}