import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom'

import Advertise from './Advertise'
import HeroSection from './HeroSection'
import HomeDetails from './HomeDetails'
import HomeSlider from './HomeSlider'

const Home = () => {
  const [homeCategory, setHomeCategory] = useState([])
  const naviagtion = useNavigation()

  useEffect(() => {
    axios
      .get('http://localhost:5000/categoryName')

      .then((data) => {
        const homeData = data.data
        console.log(homeData)
        setHomeCategory(homeData)
      })
  }, [])
  // const url = 'http://localhost:5000/orderss'
  // const { data: orders = [], refetch } = useQuery({
  //   queryKey: ['orders'],
  //   queryFn: async () => {
  //     const res = await fetch(url, {
  //       // headers: {
  //       //   authorization: `Bearer ${localStorage.getItem('token')}`,
  //       // },
  //     })
  //     const data = await res.json()
  //     return data
  //   },
  // })
  if (naviagtion.state === 'loading') {
    return (
      <div
        className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-purple-900'
        bis_skin_checked='1'
      ></div>
    )
  }

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
