
export default function Child({name, age, info}) {
    // let {name} = props;  {name:"", age:20}
    console.log(name, age, info);
    
    return(
        <h1>Hello~ My name is {name}, {age}</h1>
    )
}