import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import NavBar from '../../components/NavBar/NavBar'



const Home = () => {

  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
    </>
  )
}

export default Home
