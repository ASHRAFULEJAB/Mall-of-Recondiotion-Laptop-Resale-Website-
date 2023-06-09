import React from "react";

const Determine = () => {
  return (
    <div>
      <section class="bg-white dark:bg-transparent">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl text-center font-semibold text-gray-800 capitalize lg:text-3xl dark:text-gray-900">
            How We
            <br /> Determine <span class="text-blue-500">Our Offers</span>
          </h1>

          <iframe
            class="min-w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden"
            src="https://www.youtube.com/embed/_CSNennYnxU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
            <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
              <div class="md:flex md:items-start md:-mx-4">
                <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-gray-900 dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div class="mt-4 md:mx-4 md:mt-0">
                  <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-gray-900">
                    WE GIVE NEW LIFE TO USED DEVICES AND RECYCLE RESPONSIBLY
                  </h1>

                  <p class="mt-3 text-gray-500 dark:text-gray-900">
                    We strive to keep the chemicals in phones out of the
                    environment to provide a greener planet for future
                    generations by finding your used device a loving new home.
                  </p>
                </div>
              </div>
            </div>

            <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
              <div class="md:flex md:items-start md:-mx-4">
                <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-gray-900 dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>

                <div class="mt-4 md:mx-4 md:mt-0">
                  <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-gray-900">
                    SELL WITH CONFIDENCE
                  </h1>

                  <p class="mt-3 text-gray-500 dark:text-gray-900">
                    Our Gazelle experts inspect your device to provide an
                    accurate payment amount. Here's a short video to give you an
                    inside look at how we determine our offers.
                  </p>
                </div>
              </div>
            </div>

            {/* <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
              <div class="md:flex md:items-start md:-mx-4">
                <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-gray-900 dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </span>

                <div class="mt-4 md:mx-4 md:mt-0">
                  <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-gray-900">
                    elegant Dark Mode
                  </h1>

                  <p class="mt-3 text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ab nulla quod dignissimos vel non corrupti
                    doloribus voluptatum eveniet
                  </p>
                </div>
              </div>
            </div>

            <div class="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
              <div class="md:flex md:items-start md:-mx-4">
                <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-gray-900 dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <div class="mt-4 md:mx-4 md:mt-0">
                  <h1 class="text-xl font-medium text-gray-700 capitalize dark:text-gray-900">
                    Simple & clean designs
                  </h1>

                  <p class="mt-3 text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident ab nulla quod dignissimos vel non corrupti
                    doloribus voluptatum eveniet
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Determine;
