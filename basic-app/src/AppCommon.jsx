import Logo from "./common/Logo.jsx";
import Image from "./common/Image.jsx";

export default function App() {
    return(
        <>
            <Logo img="https://pbs.twimg.com/media/GqJ0owfa4AA423o.jpg" 
                    alt="Logo image"
                    w="250px"
                    h="200px"
            />
            <Logo img="https://i.namu.wiki/i/1xpScBTdPNfhwRFm3XKSAukoHptTWL8S2o1RRWdNAOc3Gcr_H4EbEsfm0onNnLJVypO7MLLNPu9U_bvN9f2mYg.webp" 
                    alt="Logo image"
                    w="250px"
                    h="200px"
            />
            <Image img="https://item.kakaocdn.net/do/9dc14126ee3e2d16b00d0a503b592cbb6fb33a4b4cf43b6605fc7a1e262f0845"
                    alt="ganadi"
                    w="250px"    
                    h="200px"    
            />
        </>
    )
}