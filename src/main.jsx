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
        <div className='absolute mt-[5rem] z-10 w-full h-[12rem] flex justify-center items-center lg:-mt-[2rem]'><img className='w-[5rem] h-[5rem]' src="https://cdn-icons-png.flaticon.com/128/15532/15532705.png" alt="car" /></div>
        <Home />
        <App />
        <div className='fixed bottom-0 w-full'>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
