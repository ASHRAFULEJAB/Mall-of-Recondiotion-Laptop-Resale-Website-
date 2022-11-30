import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import AllBuyerDetails from './AllBuyerDetails'

const AllBuyers = () => {
  const [allBuyer, setAllBuyer] = useState([])
  const url = 'http://localhost:5000/users'
  const { data: allBuyers = [], refetch } = useQuery({
    queryKey: ['allBuyers'],
    queryFn: async () => {
      const res = await fetch(url, {
        // headers: {
        //   authorization: `bearer ${localStorage.getItem('accessToken')}`,
        // },
      })
      const data = await res.json()
      return data
    },
  })

  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {allBuyers.map((buyer) => (
            <AllBuyerDetails
              key={buyer._id}
              buyer={buyer}
              refetch={refetch}
            ></AllBuyerDetails>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllBuyers
