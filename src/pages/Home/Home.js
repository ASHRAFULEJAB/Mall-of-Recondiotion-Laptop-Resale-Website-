import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigation } from 'react-router-dom'
import { UserAuthContext } from '../../contexts/AuthContext/AuthProvider'

import Advertise from './Advertise'
import HeroSection from './HeroSection'
import HomeDetails from './HomeDetails'
import HomeSlider from './HomeSlider'

const Home = () => {
  const [homeCategory, setHomeCategory] = useState([])
  const { loader } = useContext(UserAuthContext)
  const naviagtion = useNavigation()

  useEffect(() => {
    axios
      .get('https://mall-of-recondition-laptops-server.vercel.app/categoryName')

      .then((data) => {
        const homeData = data.data
        console.log(homeData)
        setHomeCategory(homeData)
      })
  }, [])

  if (naviagtion.state === 'loading') {
    return (
      <div
        className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-purple-900'
        bis_skin_checked='1'
      ></div>
    )
  }
  if (loader) {
    return(
    <div
      className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-purple-900'
      bis_skin_checked='1'
    ></div>
  )}
  return (
    <>
      <div className='container  my-3 grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:grid-cols-1  lg:mx-20 md:mx-20'>
        {homeCategory.map((category) => (
          <HomeDetails key={category._id} category={category}></HomeDetails>
        ))}
      </div>

      <HeroSection></HeroSection>
      <HomeSlider></HomeSlider>
      <Advertise></Advertise>
    </>
  )
}

export default Home
