import React from "react";

import DetailsCard from "@/modules/AdsDetailsPage/DetailsCard";

// Icons
import { CiLocationOn } from "react-icons/ci";
import { Toaster } from "react-hot-toast";

const AdsDetailsPage = ({ data }) => {
  const {
    title,
    location,
    description,
    amenities,
    rules,
    realEstate,
    phone,
    price,
    category,
    constructionDate,
  } = data;

  return (
    <div className="w-full flex flex-col gap-5 mt-5 lg:flex-row">
      <div className="w-full lg:w-[85%]">
        <div>
          <h3 className="text-xl text-blue-600 font-semibold">{title}</h3>
          <p className="flex text-gray-500 items-center gap-1 mt-1">
            <CiLocationOn />
            {location}
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-blue-600 font-bold border-b border-gray-500 pb-3">
            توضیخات
          </h3>
          <p className="mt-3 leading-8 text-justify">{description}</p>
        </div>
        <div className="mt-10">
          <h3 className="text-blue-600 font-bold border-b border-gray-500 pb-3">
            امکانات
          </h3>
          <ul>
            {amenities.length ? (
              amenities.map((item, index) => (
                <li className="mt-2 list-disc" key={index}>
                  {item}
                </li>
              ))
            ) : (
              <p className="bg-blue-200 text-blue-800 font-semibold py-2 px-3 rounded-md mt-4">
                موردی ذکر نشده است.
              </p>
            )}
          </ul>
        </div>
        <div className="my-10">
          <h3 className="text-blue-600 font-bold border-b border-gray-500 pb-3">
            قوانین
          </h3>
          <ul>
            {rules.length ? (
              rules.map((item, index) => (
                <li className="mt-2 list-disc" key={index}>
                  {item}
                </li>
              ))
            ) : (
              <p className="bg-blue-200 text-blue-800 font-semibold py-2 px-3 rounded-md mt-4">
                موردی ذکر نشده است.
              </p>
            )}
          </ul>
        </div>
      </div>
      <div className="w-full my-3 lg:w-[15%] lg:my-0">
        <DetailsCard
          realEstate={realEstate}
          phone={phone}
          price={price}
          category={category}
          constructionDate={constructionDate}
        />
      </div>
      <Toaster />
    </div>
  );
};

export default AdsDetailsPage;
