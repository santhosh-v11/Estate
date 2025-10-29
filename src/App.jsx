import React from 'react'

import Header from './Comps/Header'
import About from './Comps/About'
import Projects from './Comps/Projects'
import Testominal from './Comps/Testominal'
import Contact from './Comps/Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './Comps/Footer'

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Header/>
    <About/>
    <Projects/>
    <Testominal/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App