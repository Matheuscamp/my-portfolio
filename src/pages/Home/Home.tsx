import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import NavBar from '../../components/NavBar/NavBar'
import Projects from './sections/projects/projects'
import Footer from '../../components/Footer/Footer'
import BasicModal from '../../components/Modal/Modal'



const Home = () => {

  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer />
      <BasicModal />
    </>
  )
}

export default Home
