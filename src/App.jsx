import { Routes, Route} from 'react-router-dom'
import './App.css'
import { Home } from './Component/Home'
import { Urlcollection } from './Component/Urlcollection'
import { Urlbox } from './Component/Urlbox'
function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Urlbox/>}/>
        <Route path='/urls-collection' element={<Urlcollection/>}/>
     </Routes>
    </>
  )
}

export default App
