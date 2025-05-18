import React from 'react'
import Hero from '../components/Hero'
import LetestCollection from '../components/LetestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Upto from './Upto'
import Skin from '../components/Skin'


const Home = () => {
  return (
    <div>
      <Hero />
      <LetestCollection />
      <BestSeller />
      <Upto />
      <Skin />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
