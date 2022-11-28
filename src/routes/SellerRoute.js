import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserAuthContext } from '../contexts/AuthContext/AuthProvider'
import useSeller from '../hooks/useSeller'


const SellerRoute = ({ children }) => {
  const { user, loader } = useContext(UserAuthContext)
  const [isSeller,isSellerLoader] = useSeller(user?.email)
  const location = useLocation()
  if (loader || isSellerLoader) {
    return (
      <div
        className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-purple-900'
        bis_skin_checked='1'
      ></div>
    )
  }
  if (user && isSeller ) {
    return children
  }
  return (
    <Navigate
      Navigate
      to='/signin'
      state={{ from: location }}
      replace
    ></Navigate>
  )
}

export default SellerRoute
