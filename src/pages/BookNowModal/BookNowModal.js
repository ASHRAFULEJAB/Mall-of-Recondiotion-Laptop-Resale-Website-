import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { UserAuthContext } from '../../contexts/AuthContext/AuthProvider'

const BookNowModal = ({ option, setOption }) => {
  const { user } = useContext(UserAuthContext)
  const { name, resale_price, picture } = option
  console.log(option)

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const itemName = form.itemName.value
    const price = form.price.value
    const phone = form.phone.value
    const location = form.location.value
    const orders = {
      name,
      productName: option?.name,
      email,
      itemName,
      price,
      phone,
      location,
      picture,
    }

    fetch('https://mall-of-recondition-laptops-server.vercel.app/orders', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          toast.success('Item Booked Sucessfully!!')
          setOption(null)
        } else {
          toast.error(data.message)
        }
      })
  }

  return (
    <div>
      <input type='checkbox' id='booknow-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label
            onClick={() => setOption(null)}
            htmlFor='booknow-modal'
            className='btn btn-sm btn-circle absolute right-2 top-0'
          >
            ✕
          </label>
          <h3 className='font-bold text-lg'>{name}</h3>
          <form onSubmit={handleBookingSubmit} className='my-2'>
            <input
              type='text'
              name='name'
              placeholder='Enter  name here'
              defaultValue={user?.displayName}
              readOnly
              className='input input-bordered input-info w-full mb-2 '
            />
            <input
              type='email'
              name='email'
              placeholder='Type email here'
              defaultValue={user?.email}
              readOnly
              className='input input-bordered input-info w-full mb-2 '
            />
            <input
              type='text'
              name='itemName'
              defaultValue={name}
              readOnly
              placeholder='Type here'
              className='input input-bordered input-info w-full mb-2 '
            />
            <input
              type='text'
              name='price'
              defaultValue={resale_price}
              readOnly
              placeholder='Type here'
              className='input input-bordered input-info w-full mb-2 '
            />
            <input
              type='text'
              name='phone'
              required
              placeholder='Enter your Phone number here'
              className='input input-bordered input-info w-full mb-2'
            />
            <input
              type='text'
              name='location'
              required
              placeholder='Enter your meeting location here'
              className='input input-bordered input-info w-full '
            />
            <input
              className=' mt-3 text-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none'
              type='submit'
              value='Submit'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookNowModal
