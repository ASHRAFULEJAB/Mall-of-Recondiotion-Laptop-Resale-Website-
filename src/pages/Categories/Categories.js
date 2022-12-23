import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useLoaderData, useNavigation } from 'react-router-dom'
import BookNowModal from '../BookNowModal/BookNowModal'
import CategoriesDetails from './CategoriesDetails'

const Categories = () => {
  const categories = useLoaderData()
  const naviagtion = useNavigation()
  const [option, setOption] = useState(null)

  if (naviagtion.state === 'loading') {
    return (
      <div
        className=' text-center w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-purple-900'
        bis_skin_checked='1'
      ></div>
    )
  }

  const handleReport = (category) => {
    fetch('https://mall-of-recondition-laptops-server.vercel.app/reportAdmin', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Report to the Admin Done')
        console.log(data)
      })
  }

  return (
    <>
      {' '}
      <div className='container  my-3 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1  lg:mx-16 md:mx-16 '>
        {categories.map((category) => (
          <CategoriesDetails
            key={category._id}
            category={category}
            setOption={setOption}
            handleReport={handleReport}
          ></CategoriesDetails>
        ))}
      </div>
      {option && (
        <BookNowModal option={option} setOption={setOption}></BookNowModal>
      )}
    </>
  )
}

export default Categories
