import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import styled from "styled-components"
import TopPropertie from '../Components/TopPropertie'
import PropertReverse from '../Components/PropertReverse'
import Properties from '../Components/Properties'
import Services from '../Components/Services'
import Destinations from '../Components/Destinations'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

const Home = () => {
  return (<>
    <Navbar/>
    <Hero/>
    <TopPropertie/> 
    <Properties/>
    <Services/>
    <Destinations/>
    <Newsletter/>
    <Footer/>
  </>
  )
}

export default Home
