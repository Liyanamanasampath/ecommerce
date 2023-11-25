import React from 'react'
import Banner from './banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import LocationSprade from './LocationSprade'
import Sponser from './Sponser'
import TrendingProduct from './TrendingProduct'


const Home = () => {
  return (
    <div>
        <Banner/>
        <TrendingProduct/>
        <HomeCategory/>
        <CategoryShowCase/>
        <LocationSprade/>
        <Sponser/>
    </div>
  )
}

export default Home
