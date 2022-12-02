import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const CheckOutForm = ({ order }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')
  const [sucess, setSucess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const { price, email, name, _id, productName } = order
  console.log(order)

  useEffect(() => {
    fetch(
      'https://mall-of-recondition-laptops-server.vercel.app/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [price])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })
    if (error) {
      console.log(error)
      setCardError(error?.message)
    } else {
      setCardError('')
    }
    setSucess('')
    setTransactionId('')
    setProcessing(true)
    const { paymentIntent, error: confirmationError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      })
    if (confirmationError) {
      setCardError(confirmationError?.message)
      return
    }
    const payment = {
      price,
      transactionId: paymentIntent?.id,
      email,
      orderId: _id,
    }
    if (paymentIntent.status === 'succeeded') {
      fetch(
        `https://mall-of-recondition-laptops-server.vercel.app/payments?productName=${productName}`,
        {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payment),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            setSucess('Congratulation you payment has been completed')
            toast.success(
              'Congratulation you payment has been completed.Thnaks!'
            )
            setTransactionId(paymentIntent?.id)

            fetch(
              `https://mall-of-recondition-laptops-server.vercel.app/payments/update?id=${_id}`,
              {
                method: 'put',
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            )
          }
        })
    }
    setProcessing(false)
    console.log(paymentIntent)
  }

  return (
    <>
      {' '}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className='btn btn-xs btn-primary mt-4'
          type='submit'
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      <p className='text-red-900'>{cardError}</p>
      {sucess && (
        <div>
          <p className='text-green-900'>{sucess}</p>
          <p>
            Your Transaction id is <strong>{transactionId}</strong>
          </p>
        </div>
      )}
    </>
  )
}

export default CheckOutForm
