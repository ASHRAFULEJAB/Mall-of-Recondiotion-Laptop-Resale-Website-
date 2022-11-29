import React, { useEffect, useState } from 'react'
import Categories from '../Categories/Categories'
import Advertise from './Advertise'
import HeroSection from './HeroSection'
import HomeDetails from './HomeDetails'
import HomeSlider from './HomeSlider'

const Home = () => {
  const [homeCategory, setHomeCategory] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/categoryName')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setHomeCategory(data)
      })
  }, [])

  return (
    <>
      <div className='container  my-3 grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:grid-cols-1 mx-5 lg:mx-32 md:mx-20'>
        {homeCategory.map((category) => (
          
            <HomeDetails key={category._id} category={category}></HomeDetails>
 
        ))}
          </div>
          {/* <div>
          {homeCategory.map((category) => (
          
          <Categories key={category._id} category={category}></Categories>

      ))}
          </div> */}
      <HeroSection></HeroSection>
      <HomeSlider></HomeSlider>
      <Advertise></Advertise>
    </>
  )
}

export default Home
