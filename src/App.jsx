import React from 'react'

import About from "./components/About"
import { HeroScrollDemo } from './components/LandingScroll'
import BottomNavbar from './components/BottomNavbar'
import Experiences from './components/Experiences'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BentoGridSecondDemo } from './components/BentoGridDemo'


function App() {
  

  return (
    <>
     <BottomNavbar/>
  <HeroScrollDemo/>
   <About/>
    <Experiences/>  
 
    <BentoGridSecondDemo/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
