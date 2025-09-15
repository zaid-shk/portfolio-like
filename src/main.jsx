import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './assets/Components/Navbar.jsx'
import Hero from './assets/Components/Hero.jsx'
// import Img from './Img.jsx'
// import Home from './assets/Components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Hero/>
    {/* <Img/> */}
    {/* <Home/> */}

    
    
  </StrictMode>,
)
