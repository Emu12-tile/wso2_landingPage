import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Homes1 from './components/Homes1'
import Features from './components/Features'
import About from './components/About'
import Footer from './shared/Footer'
import Partners from './components/Partners'
import {image}  from './components/data'
import Hero from './components/Hero'
import Features1 from './components/Features1'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Features1/>
     <About/>
     <Partners/>
     <Footer/>
    </>
  )
}

export default App
