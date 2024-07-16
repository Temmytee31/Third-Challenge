import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';

function App() {

  return (
    <>
    <Navbar/>
    {<Homepage/>}
    </>
  )
}

export default App
