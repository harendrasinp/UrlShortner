import { Routes, Route } from 'react-router-dom'
import { HomePage } from './Component/HomePage'
import { Weather } from './Component/Weather'
import { Urlbox } from './Component/Urlbox'
import { Redirect } from './Component/Redirect'
import { AppLayout } from './Component/PageLayout/AppLayout'
import { MobNav } from './Component/PageLayout/MobNav'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<HomePage />}/>
          <Route path='/mob-home' element={<MobNav/>}/>
          <Route path='/ulrShortner' element={<Urlbox />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/:shorturl' element={<Redirect />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
