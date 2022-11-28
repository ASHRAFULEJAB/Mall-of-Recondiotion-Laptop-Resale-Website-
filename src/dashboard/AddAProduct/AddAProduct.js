import React from 'react'

const AddAProduct = () => {
  const condition = ['excellent', 'good', 'fair']
  const handleAddProduct = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const condition = form.condition.value
    const price = form.price.value
    const phone = form.phone.value
    const location = form.location.value
    const category = form.category.value
    const year = form.year.value
    const message = form.message.value
    console.log(name,condition, price, phone, location, category, year, message)
  }

  return (
    <div>
      <div class='block p-6 rounded-lg shadow-lg mx-auto mt-6 bg-white max-w-md'>
        <form onSubmit={handleAddProduct}>
          <div class='form-group mb-6'>
            <input
              name='name'
              type='text'
              class='form-control block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInput7'
              placeholder='Name'
            />
          </div>
          <div class='form-group mb-6'>
            <input
              name='price'
              type='text'
              class='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInput8'
              placeholder='Price'
            />
          </div>
          <select
            name='condition'
            className='select select-bordered w-full mb-2'
          >
            {/* <option >
              Buyers
            </option> */}

            {condition.map((r, i) => (
              <option key={r.i} value={r}>
                {r}
              </option>
            ))}
          </select>
          <div class='form-group mb-6'>
            <input
              name='phone'
              type='text'
              class='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInput8'
              placeholder='Phone Number'
            />
          </div>
          <div class='form-group mb-6'>
            <input
              name='location'
              type='text'
              class='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInput8'
              placeholder='Location'
            />
          </div>
          <div class='form-group mb-6'>
            <input
              name='category'
              type='text'
              class='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInput8'
              placeholder='category_id must be in 0(number) format like 02'
            />
          </div>
          <div class='form-group mb-6'>
            <input
              name='year'
              type='text'
              class='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='exampleInput8'
              placeholder='Year of purchase'
            />
          </div>
          <div class='form-group mb-6'>
            <textarea
              name='message'
              class=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
              id='exampleFormControlTextarea13'
              rows='3'
              placeholder='Message'
            ></textarea>
          </div>
          <div class='form-group form-check text-center mb-6'></div>
          <button
            type='submit'
            className=' w-full inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none'
          >
            Add A Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddAProduct
