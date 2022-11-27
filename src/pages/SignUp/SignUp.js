import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuthContext } from '../../contexts/AuthContext/AuthProvider'
import { useForm } from 'react-hook-form'

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { SignUp, updateUserProfile, setLoader } = useContext(UserAuthContext)
  const [signinError, setSigninError] = useState('')
  //   const navigate = useNavigate()
  //   const [userCreatedEmail, setUserCreatedeEmail] = useState('')
  const role = ['Buyer', 'Seller']

  const handleUserSignUp = (data) => {
    console.log(data)
    SignUp(data.email, data.password)
      .then((result) => {
        const user = result.user
        console.log(user)

        setSigninError('')
        const profile = {
          displayName: data.name,
        }
        updateUserProfile(profile)
          .then(() => {
            //   savedUser(data.name, data.email)
            const user = {
              name: data.name,
              email: data.email,
              role: data.role,
              image: data.photoURL,
            }
            fetch('http://localhost:5000/users', {
              method: 'post',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data)
                setLoader(false)
              })
          })
          .catch((e) => {
            console.log(e)
          })
      })
      .catch((e) => {
        console.log(e.message)
        setSigninError(e.message)
      })
  }

  //   const savedUser = (name, email) => {
  //     const user = { name, email }
  //     fetch('http://localhost:5000/users', {
  //       method: 'post',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify(user),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data)
  //         setUserCreatedeEmail(email)
  //         setLoader(false)

  //       })
  //   }
  return (
    <div className='my-3 sm:mx-3'>
      <div className='w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
        <h1 className='text-3xl font-semibold text-center text-gray-700 dark:text-white'>
          Sign Up
        </h1>

        <form onSubmit={handleSubmit(handleUserSignUp)} className='mt-6'>
          <div>
            <label
              htmlFor='username'
              className='block text-sm text-gray-800 dark:text-gray-200'
            >
              Name
            </label>
            <input
              type='text'
              {...register('name', {
                required: 'Name is required',
              })}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          {errors.name && <p className='text-white'>{errors.name?.message}</p>}
          <div>
            <label
              htmlFor='username'
              className='block text-sm text-gray-800 dark:text-gray-200'
            >
              Photo
            </label>
            <input
              type='file'
              {...register('image', {
                required: 'image is required',
              })}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          {errors.image && (
            <p className='text-white'>{errors.image?.message}</p>
          )}
          <div>
            <label
              htmlFor='username'
              className='block text-sm text-gray-800 dark:text-gray-200'
            >
              Email
            </label>
            <input
              type='Email'
              {...register('email', {
                required: 'email is required',
              })}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          {errors.email && (
            <p className='text-white'>{errors.email?.message}</p>
          )}
          <div className='mt-4'>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm text-gray-800 dark:text-gray-200'
              >
                Password
              </label>
            </div>

            <input
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be 8 characrters',
                },

                pattern: {
                  value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])/,
                  message:
                    'Password must be oneUpper&SmallLetter,one number and one special characters ',
                },
              })}
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          {errors.password && (
            <p className='text-white'>{errors.password?.message}</p>
          )}
          {signinError && <p className='text-white'>{signinError}</p>}

          <select
            {...register('role')}
            className='select select-bordered w-full max-w-xs mt-2'
          >
            <option disabled selected>
              Your Role
            </option>

            {role.map((r, i) => (
              <option key={r.i} value={r}>
                {r}
              </option>
            ))}
          </select>

          <div className='mt-6'>
            <button className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Register
            </button>
          </div>
        </form>

        <div className='flex items-center justify-between mt-4'>
          <span className='w-1/5 border-b dark:border-gray-600 lg:w-1/5'></span>

          <Link
            to='#'
            className='text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline'
          >
            or Register with Social Media
          </Link>

          <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/5'></span>
        </div>

        <div className='flex items-center mt-6 -mx-2'>
          <button
            type='button'
            className='flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none'
          >
            <svg className='w-4 h-4 mx-2 fill-current' viewBox='0 0 24 24'>
              <path d='M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z'></path>
            </svg>

            <span className='hidden mx-2 sm:inline'>Sign Up with Google</span>
          </button>

          <Link
            to='#'
            className='p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-md hover:bg-gray-200'
          >
            <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
              <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'></path>
            </svg>
          </Link>
        </div>

        <p className='mt-8 text-xs font-light text-center text-gray-400'>
          {' '}
          Already have an account?{' '}
          <Link
            to='/signin'
            className='font-medium text-gray-700 dark:text-gray-200 hover:underline'
          >
            Login
          </Link>
        </p>
      </div>

      {/* <section className='w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md dark:bg-gray-800'>
        <div className='container flex items-center justify-center min-h-screen px-6 mx-auto'>
          <form className='w-full max-w-md'>
            <img
              className='object-cover w-24 h-24 mx-auto rounded-full'
              src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
              alt='user avatar'
            />

            <div className='flex items-center justify-center mt-6'>
              <Link
               to='#'
                className='w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300'
              >
                sign in
             </Link>

              <Link
               to='#'
                className='w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white'
              >
                sign up
             </Link>
            </div>

            <div className='relative flex items-center mt-8'>
              <span className='absolute'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </span>

              <input
                type='text'
                className='block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                placeholder='Username'
              />
            </div>

            <label
              htmlFor='dropzone-file'
              className='flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-md cursor-pointer dark:border-gray-600 dark:bg-gray-900'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-300 dark:text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
                />
              </svg>

              <h2 className='mx-3 text-gray-400'>Profile Photo</h2>

              <input id='dropzone-file' type='file' className='hidden' />
            </label>

            <div className='relative flex items-center mt-6'>
              <span className='absolute'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </span>

              <input
                type='email'
                className='block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                placeholder='Email address'
              />
            </div>

            <div className='relative flex items-center mt-4'>
              <span className='absolute'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </span>

              <input
                type='password'
                className='block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                placeholder='Password'
              />
            </div>

            <div className='relative flex items-center mt-4'>
              <span className='absolute'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </span>

              <input
                type='password'
                className='block w-full px-10 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                placeholder='Confirm Password'
              />
            </div>

            <div className='mt-6'>
              <button className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                Sign Up
              </button>

              <div className='mt-6 text-center '>
                <Link
                 to='#'
                  className='text-sm text-blue-500 hover:underline dark:text-blue-400'
                >
                  Already have an account?
               </Link>
              </div>
            </div>
          </form>
        </div>
      </section> */}
    </div>
  )
}

export default SignUp
