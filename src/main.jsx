import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { Navbar } from './Component/Navbar.jsx'
import { Home } from './Component/Home.jsx'
import store from '../store.js'
import { Footer } from './Component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className='absolute mt-[8rem] z-10 w-full h-[5rem] flex justify-center items-center lg:mt-[2rem]'><img className='w-[6rem] h-[6rem]' src="https://cdn-icons-png.flaticon.com/128/15532/15532705.png" alt="car" /></div>
        <Home />
        <App />
        <div className='mt-135 lg:mt-[26rem]'>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
