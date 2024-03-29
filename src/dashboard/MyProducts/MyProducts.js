import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { UserAuthContext } from '../../contexts/AuthContext/AuthProvider'
import MyProductDetails from './MyProductDetails'
import Lottie from 'lottie-react'
import product from '../../assets/product.json'

const MyProducts = () => {
  const { user, loader } = useContext(UserAuthContext)
  const url = `https://mall-of-recondition-laptops-server.vercel.app/categories?email=${user?.email}`
  const { data: categories = [], refetch } = useQuery({
    queryKey: ['categories', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
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

  return (
    <div>
      <div className="text-black mb-20 p-10 bg-black">hdfbgfv</div>
      <div className="relative lg:w-1/2">
        <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
          <Lottie animationData={product} loop={true} />
        </div>
      </div>
      <div className="bg-white p-8 rounded-md w-full mt-16">
        <div className=" flex items-center justify-between pb-6 font-bold text-2xl">
          My Products
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Sales Status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created at
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <MyProductDetails
                      key={category._id}
                      category={category}
                      refetch={refetch}
                    ></MyProductDetails>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
        <span className="text-xs xs:text-sm text-gray-900">
          Showing 1 to 4 of 50 Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
            Prev
          </button>
          &nbsp; &nbsp;
          <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProducts
