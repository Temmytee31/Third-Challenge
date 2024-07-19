import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
    <Navbar/>
    {<Homepage/>}
    <Footer/>
    </>
  )
}

export default App
