import { useState } from 'react';
import EffectCounter from '../src/components/effects/EffectCounter.jsx';
import EffectFetch from './components/effects/EffectFetch.jsx';
import EffectFetch2 from './components/effects/EffectFetch2.jsx';
import RoomAvatar from './components/airbnb/RoomAvatar.jsx';

export default function App() {
    const [show, setShow] = useState(true);
    return(
        <>
            {/* {show && <EffectCounter/>}
            <button onClick={() => setShow(!show)}>
                {show? "숨기기" : "보이기"}
            </button>
            <hr/> */}
            <RoomAvatar/>
        </>
    )
}