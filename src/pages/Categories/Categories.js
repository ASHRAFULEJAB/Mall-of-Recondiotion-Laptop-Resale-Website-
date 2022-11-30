import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useLoaderData } from 'react-router-dom'
import BookNowModal from '../BookNowModal/BookNowModal'
import CategoriesDetails from './CategoriesDetails'

const Categories = () => {
  const categories = useLoaderData()

  const [option, setOption] = useState(null)

  const handleReport = (category) => {
    fetch('http://localhost:5000/reportAdmin', {
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
                // setLoader(false)
              })
    }
    
  
  //   const { category_id } = category
  //   const [categories, setCategories] = useState({})
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/categories/${category_id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //       })
  //   }, [category_id])
  return (
    <>
      {' '}
      <div className='container  my-3 grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:grid-cols-1 mx-5 lg:mx-32 md:mx-20'>
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
