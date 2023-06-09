import React from "react";

const FeaturedProduct = () => {
  return (
    <div>
      <h1 className="text-[#00CDAC] text-center text-2xl font-bold lg:text-4xl mt-6">
        FEATURED PRODUCTS
      </h1>
      <div
        class=" container px-6 py-10 mx-auto  mt-12 sm:-mt-80 md:mt-16
          grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
          "
      >
        <div class="  mt-8 xl:mt-6 lg:ml-16  relative">
          <div
            class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
          >
            <img
              class="  absolute h-28 w-28 left-20 -top-10 "
              src="https://e-bazar.org/uploads/images/202211/img_1920x_6378518a0a7601-34660013-45794866.jpg"
              alt=""
            />

            <div className="mt-12 text-center">
              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Apple MacBook Air 13.3
              </h1>
              <p class="mt-4 text-2xl font-semibold text-[#00CDAC] capitalize dark:text-[#00CDAC]">
                Price:$799
              </p>

              <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                Apple's thinnest, lightest notebook, completely transformed by
                the Apple M1 chip.
              </p>
            </div>
            <button
              to="/register"
              class="inline-flex items-center 
                justify-center ml-3  mt-3 h-12 w-[213px] px-6 font-medium tracking-wide
                 text-[#00CDAC] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
            >
              Order Now
            </button>
          </div>
        </div>
        <div class="  mt-8 xl:mt-6  relative">
          <div
            class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
          >
            <img
              class="  absolute h-28 w-28 left-20 -top-10 "
              src="https://goprice.com.bd/wp-content/uploads/2023/03/design-medium.jpg"
              alt=""
            />

            <div className="mt-12 text-center">
              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Apple MacBook Air (2022)
              </h1>
              <p class="mt-4 text-2xl font-semibold text-[#00CDAC] capitalize dark:text-[#00CDAC]">
                Price:$999
              </p>

              <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                {" "}
                Apple's thinnest, lightest notebook, completely transformed by
                the Apple M1 chip.
              </p>
            </div>
            <button
              to="/register"
              class="inline-flex items-center 
                justify-center ml-3  mt-3 h-12 w-[213px] px-6 font-medium tracking-wide
                 text-[#00CDAC] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
            >
              Order Now
            </button>
          </div>
        </div>
        <div class="  mt-8 xl:mt-6  relative">
          <div
            class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
          >
            <img
              class="  absolute h-28 w-28 left-20 -top-10 "
              src="https://www.rfstechnologies.com.bd/wp-content/uploads/2020/01/444.jpg"
              alt=""
            />

            <div className="mt-12 text-center">
              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Apple MacBook Pro 13.3
              </h1>
              <p class="mt-4 text-2xl font-semibold text-[#00CDAC] capitalize dark:text-[#00CDAC]">
                Price:$1299
              </p>

              <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                Apple's thinnest, lightest notebook, completely transformed by
                the Apple M1 chip.
              </p>
            </div>
            <button
              to="/register"
              class="inline-flex items-center 
                justify-center ml-3  mt-3 h-12 w-[213px] px-6 font-medium tracking-wide
                 text-[#00CDAC] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
            >
              Order Now
            </button>
          </div>
        </div>
        <div class=" lg:ml-80 mt-8 xl:mt-16 drop-shadow-2xl ">
          <div
            class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
          >
            <img
              class="  absolute h-28 w-28 left-20 -top-10 "
              src="https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-eq3619au/15s-eq3619au-01-500x500.webp"
              alt=""
            />

            <div className="mt-12 text-center">
              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                HP 15s-eq3619AU Ryzen
              </h1>
              <p class="mt-4 text-2xl font-semibold text-[#00CDAC] capitalize dark:text-[#00CDAC]">
                Price:$700
              </p>

              <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                The HP 15s-eq3619AU is powered by AMD Ryzen 5 5625U (16MB L3
                Cache, 2.3GHz, up to 4.3GHz)
              </p>
            </div>
            <button
              to="/register"
              class="inline-flex items-center 
                justify-center ml-3  mt-3 h-12 w-[213px] px-6 font-medium tracking-wide
                 text-[#00CDAC] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
            >
              Order Now
            </button>
          </div>
        </div>
        <div class=" lg:ml-56 mt-8 xl:mt-16 drop-shadow-2xl ">
          <div
            class="flex flex-col items-center p-4 border sm:p-6 rounded-[50px] w-[286px] h-[396px]
               dark:border-gray-700 bg-[#222125] "
          >
            <img
              class="  absolute h-28 w-28 left-20 -top-10 "
              src="https://www.cloud.ryanscomputers.com/cdn/products/main/hp-pavilion-15-eg2074tu-intel-core-i5-1240p-156-21685249666.webp"
              alt=""
            />

            <div className="mt-12 text-center">
              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                HP Pavilion 15-eg2074TU
              </h1>
              <p class="mt-4 text-2xl font-semibold text-[#00CDAC] capitalize dark:text-[#00CDAC]">
                Price:$900
              </p>

              <p class="mt-2 text-gray-500 capitalize   dark:text-white">
                The HP Pavilion 15-eg2074TU is powered by Intel Core i5-1240P
                Processor (12M Cache, up to 4.40 GHz )
              </p>
            </div>
            <button
              to="/register"
              class="inline-flex items-center 
                justify-center ml-3  mt-3 h-12 w-[213px] px-6 font-medium tracking-wide
                 text-[#00CDAC] transition duration-200 rounded-full shadow-md
                  bg-[#2E2D32]
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
