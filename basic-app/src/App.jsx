import AvatarImage from "./components/avatar/AvatarImage.jsx";
import people1 from './assets/people1.webp';
import people2 from './assets/people2.webp';
import people3 from './assets/people3.webp';

export default function App() {

  return ( //화면 출력
    <>
      <AvatarImage img = {people1}/>
      <AvatarImage img = {people2}/>
      <AvatarImage img = {people3}/>
    </>
  )
}
