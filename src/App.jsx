import React from 'react'
import Herosection from './Components/Hero/Index'
import About from './Components/About/About'
import ServicesSection from './Components/Service/Service'
import History from './Components/History/History'
import Backyard from './Components/Backyard/back'
import Pearlmeat from './Components/Pearlmeat/Pearl'
import Realeastate from'./Components/Realeastate/index'
import Nutrinut from './Components/Nutrinut/Nutrinut'
import Recrooter from './Components/Recrooter/Recrooter'
import Cartstars from'./Components/Cartstars/Cartstar'
import GamerCoin from './Components/Gamercoin/Gamercoin'
import Ceoportfolio from'./Components/Ceoportfolio/Ceo'
import Obs from './Components/Obs/Obs'
const App = () => {
  return (
    <>
      <Herosection />
      <About />
      <ServicesSection />
      <History />
      <Backyard />
      <Pearlmeat/>
      <Realeastate/>
      <Nutrinut/>
      <Recrooter/>
      <Cartstars/>
      <GamerCoin/>
      <Ceoportfolio/>
      <Obs/>
    </>
  )
}

export default App