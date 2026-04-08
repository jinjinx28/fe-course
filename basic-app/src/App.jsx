import './App.css';
import style from './App.module.css'  //전역 CSS
import Body from './components/Body.jsx';
import Parent from './components/Parent.jsx';

function App() {

  return ( //화면 출력
    <>
      <h1>Hello React!!</h1>
      <button className={style.button}>App::CLICK</button>
      <Body/>
      <Parent name="jinjin's dad"/>
    </>
  )
}

export default App
