import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import AboutUs from './components/aboutus/Aboutus'
import Donate from './components/donate/Donate'

function App() {

  return (
    <div className='bg-blue-300' >
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/donate' element={<Donate />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
