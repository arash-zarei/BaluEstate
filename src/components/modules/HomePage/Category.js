import React from "react";

import { categories, cities, services } from "@/constants/categories";
import CategoryCard from "@/modules/HomePage/CategoryCard";

// Icons
import { BiCircle } from "react-icons/bi";
import { FaCity } from "react-icons/fa";

const Category = () => {
  return (
    <div className="w-full mt-14 px-3">
      <div>
        <ul className="flex items-center justify-center flex-wrap gap-6">
          {services.map((item) => (
            <li
              className="flex items-center gap-2  py-1 px-5 rounded-md bg-blue-300 text-blue-800 font-semibold"
              key={item}
            >
              <BiCircle /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full mt-14 grid grid-cols-1 sm:justify-items-center sm:grid-cols-2 lg:grid-cols-4">
        {Object.keys(categories).map((i) => (
          <CategoryCard key={i} title={categories[i]} name={i} />
        ))}
      </div>
      <div className="my-14">
        <h3 className="text-2xl text-yellow-400 font-bold text-center mb-8">شهر های پر باردید</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {cities.map((i) => (
            <li
              className="flex items-center justify-center gap-2  py-1 px-10 rounded-md bg-blue-300 text-blue-800 font-semibold"
              key={i}
            >
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
