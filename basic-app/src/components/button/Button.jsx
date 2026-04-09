
export default function Button({type, name, styles}) {
    let{w, h, bg, c} = styles;
    
    return(
        <>
            <button type={type} name={name} style={{width:styles.w, height:styles.h, backgroundColor:styles.bg, color:styles.c}}>
                {name}
            </button>
        </>
    )
}