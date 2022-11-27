import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CategoriesDetails from './CategoriesDetails'

const Categories = () => {
  const categories = useLoaderData()
  console.log(categories)

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
    <div className='container  my-3 grid lg:grid-cols-3 md:grid-cols-2 gap-3 sm:grid-cols-1 mx-5 lg:mx-32 md:mx-20'>
      {categories.map((category) => (
        <CategoriesDetails
          key={category._id}
          category={category}
        ></CategoriesDetails>
      ))}
    </div>
  )
}

export default Categories
