import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'


import Footer from './shared/Footer'
import Partners from './components/Partners'

function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <Features/>
     <About/>
     <Partners/>
     <Footer/>
    </>
  )
}

export default App
