
export default function Button({type, name, styles}) {
    let{w, h, bg, c} = styles;

    const handleClick = (e) => {
        console.log(e.target.name, e.target.innerText);
    }
    
    return(
        <>
            <button type={type} 
                    name={name} 
                    style={{width:styles.w, height:styles.h, backgroundColor:styles.bg, color:styles.c}}
                    // onClick={() => {console.log('버튼 클릭!!');
                    onClick={(handleClick)}>
                {name}
            </button>
        </>
    )
}