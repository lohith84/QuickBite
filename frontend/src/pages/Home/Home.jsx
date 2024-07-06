import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Testimonials from '../../components/Testimonials/Testimonials';
import Confidence from '../../components/Condifence/Confidence';
import Map from '../../components/Map/Map'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <About/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      <Confidence />
      <Testimonials />
      <Map />
    </>
  )
}

export default Home
