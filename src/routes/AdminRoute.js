import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserAuthContext } from '../contexts/AuthContext/AuthProvider'
import useAdmin from '../hooks/useAdmin'


const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(UserAuthContext)
  const [isAdmin, isAdminLoader] = useAdmin(user?.email)
  const location = useLocation()
  if (loader || isAdminLoader) {
    return (
      <div
      className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-purple-900'
        bis_skin_checked='1'
      ></div>
    )
  }
  if (user && isAdmin) {
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

export default AdminRoute
