
export default function Image({img, alt, w, h, className}) {
    return(
        <img src={img} 
            alt={alt}
            style={{
                
                width : w || undefined, 
                height : h || undefined
            }}
            className={className} 
        />
    )
}