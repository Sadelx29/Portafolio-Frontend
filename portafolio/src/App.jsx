import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import { Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
    </Routes>

    </>
  )
}

export default App
