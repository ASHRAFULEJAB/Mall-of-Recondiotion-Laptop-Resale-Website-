import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { UserAuthContext } from '../../contexts/AuthContext/AuthProvider'

const AddAProduct = () => {
  const condition = ['excellent', 'good', 'fair']
  const imagebbKEY = process.env.REACT_APP_IMAGEBB_KEY
  const navigate = useNavigate()
  const { user } = useContext(UserAuthContext)

  const url = `https://mall-of-recondition-laptops-server.vercel.app/users/email?email=${user?.email}`
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {})
      const data = await res.json()
      return data
    },
  })

  const handleAddProduct = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const condition = form.condition.value
    const resale_price = form.resale_price.value
    const original_price = form.original_price.value
    const phone = form.phone.value
    const location = form.location.value
    const category_id = form.category_id.value
    const years_of_use = form.years_of_use.value
    const message = form.message.value
    const product_type = 'available'

    console.log(
      name,
      condition,
      resale_price,
      original_price,
      phone,
      location,
      category_id,
      years_of_use,
      message
    )
    const image = form.image.files[0]
    const formData = new FormData()
    formData.append('image', image)
    // formData.append('img', img)
    const url = `https://api.imgbb.com/1/upload?key=${imagebbKEY}`

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData)
        if (imgData.success) {
          console.log(imgData.data.url)
        }
        const product = {
          name,
          condition,
          resale_price,
          original_price,
          phone,
          location,
          category_id,
          years_of_use,
          message,
          product_type,
          picture: imgData.data.url,
          email: user?.email,
          type: 'available',
          verfiy: 'Unverified',
        }
        console.log(user?.email)

        fetch(
          `https://mall-of-recondition-laptops-server.vercel.app/categories/${category_id}`,
          {
            method: 'post',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(product),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            toast.success(`Product added`)
            navigate('/dashboard/my-products')
          })
      })
  }

  return (
    <div>
      <div className="text-black mb-20 p-10 bg-black">hdfbgfv</div>
      <div className="block p-6 rounded-lg shadow-lg mx-auto mt-6 bg-white max-w-md">
        <form onSubmit={handleAddProduct}>
          <div className="form-group mb-6">
            <input
              name="name"
              type="text"
              className="form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              name="original_price"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="original price"
            />
          </div>
          <div className="form-group mb-6">
            <input
              name="resale_price"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Resale price"
            />
          </div>
          <select
            name="condition"
            className="select select-bordered w-full mb-2"
          >
            {condition.map((r, i) => (
              <option key={r.i} value={r}>
                {r}
              </option>
            ))}
          </select>
          <div className="form-group mb-6">
            <input
              name="image"
              type="file"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Enter Your Photo"
            />
          </div>
          <div className="form-group mb-6">
            <input
              name="phone"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group mb-6">
            <input
              name="location"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Location"
            />
          </div>
          <label className="text-red-600 font-bold ">
            You Must Add Category Id Between 01,02,03,04,05,06
          </label>
          <div className="form-group mb-6">
            <input
              name="category_id"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="category_id must be in 0(number) format like 02"
            />
          </div>
          <div className="form-group mb-6">
            <input
              name="years_of_use"
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Year of purchase"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              name="message"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-group form-check text-center mb-6"></div>
          <button
            type="submit"
            className=" w-full inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
          >
            Add A Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAProduct
