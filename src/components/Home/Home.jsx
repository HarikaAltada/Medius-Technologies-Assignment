import React from 'react'
import HeroSection from './HeroSection'
import Stories from './Stories'
import Products from './Products'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <HeroSection />
      <Stories />
      <Products />
      <Footer />
    </div>
  )
}

export default Home