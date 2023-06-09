import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import AllBuyerDetails from './AllBuyerDetails'

const AllBuyers = () => {
  const [allBuyer, setAllBuyer] = useState([])
  const url = 'https://mall-of-recondition-laptops-server.vercel.app/users'
  const { data: allBuyers = [], refetch } = useQuery({
    queryKey: ['allBuyers'],
    queryFn: async () => {
      const res = await fetch(url, {})
      const data = await res.json()
      return data
    },
  })

  return (
    <>
      <div className="text-black mb-20 p-10 bg-black">hdfbgfv</div>
      <h1 className="text-center font-bold text-6xl mt-3">All Buyers</h1>
      <div className="mt-36">
        <table className="table w-full">
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
    </>
  );
}

export default AllBuyers
