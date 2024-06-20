import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ApiDeveloper from './components/ApiDeveloper'
import ApiUse from './components/ApiUse'


import Footer from './shared/Footer'
import Partners from './components/Partners'
import userFetch from './hooks/userFetch'
import { BASEURL } from './config'
import AdditionalInf from './components/AdditionalInf'
function App() {
// let{loading,data,error}=userFetch(`${BASEURL}/api/api-developers-page?populate=*`)
// if(loading) return <p>Loading...</p>
// if(error) return <p>Error</p>
// console.log(data)
  return (
    <>
     <Navbar/>
     <Home/>
     <ApiDeveloper/>
     <AdditionalInf/>
     <ApiUse/>
     <Partners/>
     <Footer/>
    
    </>
  )
}

export default App
