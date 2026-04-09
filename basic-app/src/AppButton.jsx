import Button from "./components/button/Button.jsx";
    const styleObj1 = {
        w:"100px", 
        h:"50px", 
        bg:"pink",
        c:"white"
    }
    const styleObj2 = {
        w:"200px", 
        h:"50px", 
        bg:"aqua",
        c:"white"
    }
export default function App() {
    return(
        <>
            <Button type="button" name="Signin" styles={styleObj1}/>
            <Button type="submit" name="Signup" styles={styleObj2}/>
        </>
    )
}