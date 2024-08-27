import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import NavBar from '../../components/NavBar/NavBar'
import Projects from './sections/projects/projects'



const Home = () => {

  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
    </>
  )
}

export default Home
