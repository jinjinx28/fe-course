import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// 라우팅 주소 설정


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)