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
        <div className='z-10 w-full flex justify-center items-center'><img className='w-[6rem]' src="https://cdn-icons-png.flaticon.com/128/15532/15532705.png" alt="car" /></div>
        <Home />
        <App />
        <div className='bottom-0 w-full'>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
