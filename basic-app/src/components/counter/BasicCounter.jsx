import { useState } from "react";

export default function BasicCounter() {
    let [count, setCount] = useState(0);
    let [flag, setFlag] = useState(false);

    const handleCounter = (e) => {
        let type = e.target.name;
        if(type === "+") {
            if(count < 10) {
                setCount(count+1);  
                setFlag(true);           
            }
        } else if(type === "-") {
            if(count > 0) {
                setCount(count-1);
                setFlag(false);
            }
        } else {
            setCount(0);
        }
    }

    // const increment = () => {
    //     if(count < 10) setCount(count+1);    
    // }
    // const decrement = () => {
    //     if(count > 0) setCount(count-1);
    // }
    // const reset = () => {
    //     setCount(0);    
    // }
    return(
        <div style={{border:'1px solid darkgray', padding:'10px 20px'}}>
            <h1>React Counter</h1>
            <h2>Counter ::  
                {flag? <span style={{color:'aqua'}}>{count}</span> : <span style={{color:'pink'}}>{count}</span>}
            </h2>

            <div>
                <button type="button" name="+" onClick={handleCounter}>증가(+)</button>
                <button type="button" name="-" onClick={handleCounter}>감소(-)</button>
                <button type="button" name="reset" onClick={handleCounter}>초기화</button>
            </div>
        </div>
    )
}