import Child from "./Child.jsx"

export default function Parent(props) {
    let info = {
        name : "진진",
        age : "23"
    }
    return (
        <>
            <h1>Parent :: {props.name}</h1>
            <Child name="jinjin" age = "23" info = {info}/>
        </>
    )
}