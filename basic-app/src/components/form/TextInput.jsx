[
    {type : "text", name : "name"}
]

export default function TextInput({item, value, handleChange, inputRef}) {
    const {type, name} = item;
    return (
        <input type={type} 
                name={name} 
                id={name}
                value={value}
                onChange={(e) => {handleChange(e)}}
                ref={inputRef} 
        />
    )
}