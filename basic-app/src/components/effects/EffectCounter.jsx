import { useState } from "react";

export default function EffectCounter() {
    const [count, setCount] = useState(0);

    return(
        <div style={{width : '200px', 
                    textAlign : "center", 
                    border : '1px solid gray'}}>
            <h1>{count}</h1>
            <button type="button" onClick={() => setCount(count+1)}>증가(+)</button>
            <button type="button" onClick={() => setCount(count-1)}>감소(-)</button>
        </div>
    )
}