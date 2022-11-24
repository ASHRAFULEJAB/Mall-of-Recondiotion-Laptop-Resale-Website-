import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { DoctorsContext } from '../Context/DoctorsContext/DoctorsProvider'

const PrivateRoute = ({ children }) => {
  const { userDoctor, loader } = useContext(DoctorsContext)
  const location = useLocation()
  if (loader) {
    return (
      <div
        className='w-16 h-16 c border-4 border-dashed rounded-full animate-spin dark:border-violet-400'
        bis_skin_checked='1'
      ></div>
    )
  }
  if (!userDoctor) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }
  return children
}

export default PrivateRoute
