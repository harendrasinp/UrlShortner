import { Routes, Route} from 'react-router-dom'
import './App.css'
import { Home } from './Component/Home'
import { Urlcollection } from './Component/Urlcollection'
import { Urlbox } from './Component/Urlbox'
import { Redirect } from './Component/Redirect'
function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Urlbox/>}/>
        <Route path='/urls-collection' element={<Urlcollection/>}/>
        <Route path='/:shorturl' element={<Redirect/>}/>
     </Routes>
    </>
  )
}

export default App
