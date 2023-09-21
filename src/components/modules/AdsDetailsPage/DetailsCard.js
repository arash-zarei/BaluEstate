import React from "react";

import ShareButton from "@/modules/AdsDetailsPage/ShareButton";
import { categories, icons } from "@/constants/categories";
import { sp } from "@/utils/replaceNumber";

// Icons
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { BiCalendarCheck } from "react-icons/bi";

const DetailsCard = ({
  realEstate,
  phone,
  price,
  category,
  constructionDate,
}) => {
  return (
    <div className="w-full sm:flex sm:justify-center sm:items-center sm:gap-5 lg:block">
      <div className="bg-white shadow-xl p-4 rounded-lg">
        <div className="flex justify-center">
          <SiHomebridge className="text-4xl text-blue-700" />
        </div>
        <p className="text-black font-bold text-center my-3">
          املاک {realEstate}
        </p>
        <p className="flex gap-2 text-gray-500 justify-center my-3">
          <AiOutlinePhone />
          {phone}
        </p>
      </div>
      <ShareButton />
      <div className="bg-white shadow-xl p-4 rounded-lg mt-7">
        <p className="flex items-center gap-2 justify-center">
          {icons[category]}
          {categories[category]}
        </p>
        <p className="flex items-center justify-center gap-1 my-3 overflow-x-auto">
          {sp(price)}
          تومان
        </p>
        <p className="flex items-center justify-center gap-1">
          <BiCalendarCheck />
          {new Date(constructionDate).toLocaleDateString("fa-IR")}
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
