import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import AdvertiseDetails from './AdvertiseDetails'

const Advertise = () => {
  const [advertise, setAdvertise] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/advertise?product_type=available&&type=publish')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setAdvertise(data)
      })
  }, [])

  // console.log(orders)
  if (advertise.length > 0) {
    return (
      <div>
        <h1 className='text-2xl text-center font-bold my-5'>AdvertiseMent</h1>
        {/* console.log(advertise) */}

        <div className='container  my-3 grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:grid-cols-1 mx-5 lg:mx-32 md:mx-20'>
          {advertise.map((advertis) => (
            <AdvertiseDetails key={advertis._id} advertis={advertis}></AdvertiseDetails>
          ))}
        </div>
      </div>
    )
  } else {
  }
}

export default Advertise
