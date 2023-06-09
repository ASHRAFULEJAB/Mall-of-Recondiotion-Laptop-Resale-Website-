import React from "react";
import Banner from "../../assets/images/hero.avif";

const HomeBanner = () => {
  return (
    <div className="relative h-[56.25vw] lg:mb-40 mb-16">
      <img
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        src={Banner}
        alt="imgae"
      ></img>
      <div className="absolute top-[30%]  md:top-[20%] ml-4 md:ml-16">
        <p
          className="text-white  uppercase text-xl lg:mt-0 mt-1  sm:mt-6 md:text-5xl h-full lg:w-[50%] lg:text-8xl 
          font-bold drop-shadow-xl"
        >
          The Best Laptop Of the Year
        </p>
        <p
          className="text-[#52C1B9] lg:text-[25px] md:text-lg lg:mt-2 md:mt-8 w-[90%]
           md:w-[80%] lg:w-[50%] drop-shadow-xl"
        >
          Latest Technologies Laptops <br /> with  Cheapest Price in the Marketplace
        </p>
        <div className="lg:flex lg:flex-row items-center mt-3 md:mt-4 gap-3 mb-6 lg:mb-0">
          <button
            className="
            bg-tarsparent
            text-[#52C1B9]
              bg-opacity-30 
              rounded-full 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-xs 
              font-semibold
              flex
              border
              border-[#52C1B9]
              flex-row
              items-center
              hover:bg-opacity-20
              transition
              
            "
          >
            Shop now
          </button>
        </div>
      </div>
      <div className="">
        <h1 className="text-[#52C1B9] font-semibold lg:text-[23px] my-3 lg:mt-0 mt-2 ml-3 lg:ml-36">
          Get  the Product Now!! before everyone else 
        </h1>
        <div className="lg:flex lg:mt-0 mt-2 ">
          <input
            type="email"
            className="bg-[#07070F] 
               border-[4px] border-[#74B4B3] rounded-full lg:ml-36 py-3 px-20 lg:px-32"
            placeholder="Enter Email Here"
          />
          <div className="flex justify-center items-center">
            <button
              to="/register"
              class="lg:inline-flex items-center 
                justify-center lg:ml-3 h-12 lg:mt-0 mt-3 px-12 font-medium tracking-wide
                 text-white transition duration-200 rounded-full shadow-md
                  bg-gradient-to-r from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] 
                  to-84.87% ...
                  hover:bg-white-100 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
            >
              Buy Now
            </button>
            {/* Social Media */}
            <div class="lg:flex items-center gap-3 sm:gap-x-5 ml-2 lg:ml-20">
              {/* GOOGle */}
              <button
                class="bg-white dark:bg-gradient-to-r 
                from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] 
                  to-84.87% dark:border-gray-700
                   dark:hover:bg-gray-800 rounded-full
                    hover:bg-gray-100 duration-300 transition-colors border px-3 py-2.5"
              >
                <svg
                  class="w-5 h-5 sm:h-6 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3033_94454)">
                    <path
                      d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                      fill="#FFFFFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3033_94454">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              {/* LinkedIn */}
              <button
                class="bg-gradient-to-r 
                from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] 
                  to-84.87% rounded-full 
              hover:bg-black/80 duration-300 transition-colors border border-transparent px-3 py-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  aria-labelledby="title"
                  aria-describedby="desc"
                  role="img"
                  class="w-5 h-5 sm:h-6 sm:w-6"
                >
                  <title>Linkedin</title>
                  <desc>A color styled icon from Orion Icon Library.</desc>
                  <path
                    data-name="layer1"
                    fill="#ffffff"
                    d="M1.15 21.7h13V61h-13zm46.55-1.3c-5.7 0-9.1 2.1-12.7 6.7v-5.4H22V61h13.1V39.7c0-4.5 2.3-8.9 7.5-8.9s8.3 4.4 8.3 8.8V61H64V38.7c0-15.5-10.5-18.3-16.3-18.3zM7.7 2.6C3.4 2.6 0 5.7 0 9.5s3.4 6.9 7.7 6.9 7.7-3.1 7.7-6.9S12 2.6 7.7 2.6z"
                  ></path>
                </svg>
              </button>
              {/* FaceBook */}
              <button
                class="bg-gradient-to-r 
                from-[#38A1BB] from-14.72% via-[#38A1BB] via-77.9% to-[#604DBC] 
                  to-84.87% rounded-full hover:bg-[#1877F2]/80 duration-300 
              transition-colors border border-transparent px-3 py-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />

                  <defs>
                    <clipPath id="clip0_3033_94669">
                      <rect width="24" height="24" fill="#ffffff" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
