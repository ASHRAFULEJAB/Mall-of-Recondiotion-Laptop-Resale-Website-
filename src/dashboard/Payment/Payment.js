import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CheckOutForm from './CheckOutForm'
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_KEY)


const Payment = () => {
  const order = useLoaderData()
  console.log(order)
  return (
    <div>
      <h2 className='text-3xl my-3'>Payment for {order?.name}</h2>
      <p>
        Please pay $<strong>{order?.price} </strong> for this item{' '}
        <strong>{order?.itemName}</strong>{' '}
          </p>
          <div className='w-80 my-6'>
        <Elements stripe={stripePromise}>
          <CheckOutForm order={order} />
        </Elements>
      </div>
    </div>
  )
}

export default Payment
