export default function Image({img, alt, w, h, className}) {
    return(
        <img src={img} 
            alt={alt}
            style={{
                
                width : "300px", 
                height : "250px",
            }}
            className={className} 
        />
    )
}