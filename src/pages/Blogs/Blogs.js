import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div>
      <section class='bg-white mb-3'>
        <div class='container px-6 py-10 mx-auto'>
          <div class='flex items-center justify-between'>
            <h1 class='text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-gray-800'>
              recent blogs{' '}
            </h1>

            <button class='focus:outline-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-900 hover:text-blue-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>

          <hr class='my-8 border-gray-200 dark:border-gray-700' />

          <div class='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
            <div>
              <img
                class='object-cover object-center w-full h-64 rounded-lg lg:h-80'
                src='https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt=''
              />

              <div class='mt-8'>
                <span class='text-blue-500 uppercase'>category</span>

                <h1 class='mt-4 text-xl font-semibold text-gray-800 dark:text-gray-800'>
                  What are the different ways to manage a state in a React
                  application?
                </h1>

                <p class='mt-2 dark:text-gray-900'>
                  The Four Kinds of React State to Manage.
                  <br />
                  <strong>Local state:</strong>Local state is data we manage in
                  one or another component.
                  <br />
                  <strong> Global state:</strong>Global state is necessary when
                  we want to get and update data anywhere in our app, or in
                  multiple components at least.
                  <br /> <strong>Server state:</strong>Data that comes from an
                  external server that must be integrated with our <br />{' '}
                  <strong>URL state:</strong>URL state is often missing as a
                  category of state, but it is an important one. In many cases,
                  a lot of major parts of our application rely upon accessing
                  URL state. URL state.
                </p>

                <div class='flex items-center justify-between mt-4'>
                  <div>
                    <Link
                      to='#'
                      class='text-lg font-medium text-gray-700 dark:text-gray-700 hover:underline hover:text-gray-900'
                    >
                      John snow
                    </Link>

                    <p class='text-sm text-gray-900 dark:text-gray-900'>
                      February 1, 2022
                    </p>
                  </div>

                  <Link
                    to='#'
                    class='inline-block text-blue-500 underline hover:text-blue-400'
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <img
                class='object-cover object-center w-full h-64 rounded-lg lg:h-80'
                src='https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                alt=''
              />

              <div class='mt-8'>
                <span class='text-blue-500 uppercase'>category</span>

                <h1 class='mt-4 text-xl font-semibold  dark:text-gray-800'>
                How does prototypical inheritance work?
                </h1>

                <p class='mt-2  dark:text-gray-900'>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>

                <div class='flex items-center justify-between mt-4'>
                  <div>
                    <Link
                      to='#'
                      class='text-lg font-medium  dark:text-gray-700 hover:underline hover:text-gray-900'
                    >
                      Arthur Melo
                    </Link>

                    <p class='text-sm text-gray-900 dark:text-gray-900'>
                      February 6, 2022
                    </p>
                  </div>

                  <Link
                    to='#'
                    class='inline-block text-blue-500 underline hover:text-blue-400'
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <img
                class='object-cover object-center w-full h-64 rounded-lg lg:h-80'
                src='https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                alt=''
              />

              <div class='mt-8'>
                <span class='text-blue-500 uppercase'>category</span>

                <h1 class='mt-4 text-xl font-semibold  dark:text-gray-800'>
                What is a unit test? Why should we write unit tests?
                </h1>

                <p class='mt-2  dark:text-gray-900'>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>

                <div class='flex items-center justify-between mt-4'>
                  <div>
                    <Link
                      to='#'
                      class='text-lg font-medium  dark:text-gray-700 hover:underline hover:text-gray-900'
                    >
                      Tom Hank
                    </Link>

                    <p class='text-sm text-gray-900 dark:text-gray-900'>
                      February 19, 2022
                    </p>
                  </div>

                  <Link
                    to='#'
                    class='inline-block text-blue-500 underline hover:text-blue-400'
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img
                class='object-cover object-center w-full h-64 rounded-lg lg:h-80'
                src='https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                alt=''
              />

              <div class='mt-8'>
                <span class='text-blue-500 uppercase'>category</span>

                <h1 class='mt-4 text-xl font-semibold  dark:text-gray-800'>
                React vs. Angular vs. Vue?
                </h1>

                <p class='mt-2  dark:text-gray-900'>
                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                </p>

                <div class='flex items-center justify-between mt-4'>
                  <div>
                    <Link
                      to='#'
                      class='text-lg font-medium  dark:text-gray-700 hover:underline hover:text-gray-900'
                    >
                      Tom Cruze
                    </Link>

                    <p class='text-sm text-gray-900 dark:text-gray-900'>
                      February 29, 2022
                    </p>
                  </div>

                  <Link
                    to='#'
                    class='inline-block text-blue-500 underline hover:text-blue-400'
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs
