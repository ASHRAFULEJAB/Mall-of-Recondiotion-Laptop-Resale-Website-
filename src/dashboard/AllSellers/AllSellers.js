import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { UserAuthContext } from '../../contexts/AuthContext/AuthProvider'
import AllSellerDetails from './AllSellerDetails'

const AllSellers = () => {
  const { loader } = useContext(UserAuthContext)
  const url = 'http://localhost:5000/users'
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ['allSellers'],
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
  if (loader) {
    return (
      <div
        className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-purple-900'
        bis_skin_checked='1'
      ></div>
    )
  }
  //   useEffect(() => {
  //     fetch('http://localhost:5000/users')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //         setAllBuyer(data)
  //       })
  //   }, [])

  return (
    <div className='overflow-x-auto'>
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
  )
}

export default AllSellers
;<h2>dd</h2>
