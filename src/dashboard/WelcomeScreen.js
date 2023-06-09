import React, { useContext } from 'react'
import { UserAuthContext } from '../contexts/AuthContext/AuthProvider'
import useAdmin from '../hooks/useAdmin'
import useSeller from '../hooks/useSeller'
import Banner from '../assets/images/dashboardhero.avif'
import Footer from '../shared/Footer/Footer'

const WelcomeScreen = () => {
  const { user} = useContext(UserAuthContext)
  const [isAdmin] = useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)


  return (
    <>
      <div className="relative h-full">
        <img
          className="w-full h-full object-cover brightness-[40%] transition duration-500"
          src={Banner}
          alt="imgae"
        ></img>
        <div
          className=" absolute lg:bottom-3 bottom-6 left-1 lg:left-96 h-screen
         text-gray-100 flex flex-col justify-center items-center pb-16"
        >
          <div className="flex justify-center items-center">
            <p className="lg:text-8xl text-6xl font-bold">Welc</p>
            <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin mt-6 border-purple-900"></div>
            <p className="lg:text-8xl text-6xl font-bold mr-2">me</p>
            <p className="lg:text-8xl text-6xl font-bold">To</p>
          </div>
          <div className="flex justify-center text-gray-100 items-center mt-4">
            {isAdmin && <p className="text-3xl font-medium">Admin Dashboard</p>}
            {isSeller && (
              <p className="text-3xl font-medium">Seller Dashboard</p>
            )}

            {!isAdmin && !isSeller && (
              <p className="text-3xl font-medium">Buyer Dashboard</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeScreen
