import React from 'react'
import { Link } from 'react-router-dom'

const MyOrderDetails = ({ order }) => {
  const { _id, itemName, name, price, picture } = order
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 w-10 h-10'>
            <img className='w-full h-full rounded-full' src={picture} alt='' />
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{name}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{itemName}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>Nov 21, 2022</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>
            {!order?.paid && (
              <Link to={`/dashboard/payment/${order._id}`}>
                <button className='btn btn-secondary btn-xs'>Pay</button>
              </Link>
            )}
            {order?.paid && (
              <button className='btn btn-sucess btn-xs'>Paid</button>
            )}
          </span>
        </span>
      </td>
    </tr>
  )
}

export default MyOrderDetails
