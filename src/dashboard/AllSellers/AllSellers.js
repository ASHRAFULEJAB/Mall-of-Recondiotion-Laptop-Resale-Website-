import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { UserAuthContext } from '../../contexts/AuthContext/AuthProvider'
import AllSellerDetails from './AllSellerDetails'

const AllSellers = () => {
  const { loader } = useContext(UserAuthContext)
  const url = 'https://mall-of-recondition-laptops-server.vercel.app/users'
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ['allSellers'],
    queryFn: async () => {
      const res = await fetch(url, {})
      const data = await res.json()
      return data
    },
  })
  if (loader) {
    return (
      <div
        className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-purple-900'
        bis_skin_checked='1'
      ></div>
    )
  }

  return (
    <>
      <h1 className='text-center font-bold text-6xl mt-3'>All Sellers</h1>
      <div className='overflow-x-auto mt-36'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allSellers.map((seller) => (
              <AllSellerDetails
                key={seller._id}
                refetch={refetch}
                seller={seller}
              ></AllSellerDetails>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AllSellers
;<h2>dd</h2>
