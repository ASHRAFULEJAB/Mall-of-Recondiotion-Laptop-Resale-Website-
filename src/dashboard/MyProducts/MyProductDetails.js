import React, { useState } from 'react'
import toast from 'react-hot-toast'

const MyProductDetails = ({ category, refetch, order }) => {
  const { name, resale_price, picture, type, product_type } = category

  const [deletingDoctor, setDeletingDoctor] = useState(null)

  const handleDelete = (category) => {
    fetch(
      `https://mall-of-recondition-laptops-server.vercel.app/categories/${category._id}`,
      {
        method: 'delete',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch()
          toast.success(`Product ${data?.name} has been deleted`)
        }
        console.log(data)
      })
  }
  const handleAdverrtise = (id) => {
    console.log(id)
    fetch(
      `https://mall-of-recondition-laptops-server.vercel.app/advertise?id=${id}`,
      {
        method: 'put',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(category),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success('Advertisement Done')
        console.log(data)
      })
  }
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
        <p className='text-gray-900 whitespace-no-wrap'>
          <strong className='text-yellow-600'>
            {type === 'available' && product_type === 'available'
              ? 'Available'
              : 'Sold'}
          </strong>
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>Nov 21, 2022</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${resale_price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>
            <button
              onClick={() => handleDelete(category)}
              className='btn btn-xs btn-error mr-2'
            >
              Delete
            </button>
            <button
              onClick={() => handleAdverrtise(category._id)}
              className='btn btn-xs btn-warning'
            >
              Advertise
            </button>
          </span>
        </span>
      </td>
    </tr>
  )
}

export default MyProductDetails
