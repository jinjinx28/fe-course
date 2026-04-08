
import './App.css'  //전역 CSS
import Body from './components/Body.jsx';

function App() {

  return ( //화면 출력
    <>
      <h1>Hello React!!</h1>
      <button className='button'>App::CLICK</button>
      <Body/>
    </>
  )
}

export default App
