import { Routes, Route} from 'react-router-dom'
import { HomePage } from './Component/HomePage'
import { Weather } from './Component/Weather'
import { Urlbox } from './Component/Urlbox'
import { Redirect } from './Component/Redirect'
function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/ulrShortner' element={<Urlbox/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/:shorturl' element={<Redirect/>}/>
     </Routes>
    </>
  )
}

export default App
