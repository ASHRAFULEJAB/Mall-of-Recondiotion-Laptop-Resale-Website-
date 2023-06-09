import React from "react";
import { Link } from "react-router-dom";

const HomeDetails = ({ category }) => {
  const { name, img, category_id } = category;

  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800 lg:mt-0 mt-16 mx-6">
      <img
        className="object-cover w-full h-56 bg-white"
        src={img}
        alt="avatar"
      />

      <div className="py-5 text-center">
        <Link
          href="#"
          className="block text-2xl font-bold text-gray-800 dark:text-white"
          tabIndex="0"
          role="link"
        >
          {name}
        </Link>
        <Link
          to={`categories/${category_id}`}
          className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
          aria-label="Sign up"
          title="Sign up"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default HomeDetails;
