"use client";

import CustomDatePicker from "@/modules/AddAdsPage/CustomDatePicker";
import RadioList from "@/modules/AddAdsPage/RadioList";
import TextInputs from "@/modules/AddAdsPage/TextInputs";
import TextList from "@/modules/AddAdsPage/TextList";
import React, { useState } from "react";

const AddAdsPage = () => {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realEstate: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  const submitHandler = () => {
    console.log(profileData);
  }

  return (
    <div className="w-full mb-7" id="ads">
      <h3 className="py-2 rounded-md bg-yellow-400 px-4">ثبت آگهی جدید</h3>
      <div className="mt-5">
        <TextInputs
          title="عنوان آگهی"
          name="title"
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <TextInputs
          title="توضیحات"
          name="description"
          profileData={profileData}
          setProfileData={setProfileData}
          textarea={true}
        />
        <TextInputs
          title="آدرس"
          name="location"
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <div className="flex justify-center items-center flex-wrap gap-3">
          <TextInputs
            title="شماره تماس"
            name="phone"
            profileData={profileData}
            setProfileData={setProfileData}
          />
          <TextInputs
            title="قیمت(تومان)"
            name="price"
            profileData={profileData}
            setProfileData={setProfileData}
          />
          <TextInputs
            title="بنگاه"
            name="realEstate"
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </div>
        <RadioList profileData={profileData} setProfileData={setProfileData} />
        <TextList
          profileData={profileData}
          setProfileData={setProfileData}
          title="امکانات رفاهی"
          type="amenities"
        />
        <TextList
          profileData={profileData}
          setProfileData={setProfileData}
          title="قوانین"
          type="rules"
        />
        <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />
        <button onClick={submitHandler} className="bg-blue-700 w-full py-2 rounded-md text-white font-semibold my-10">
          ثبت آگهی
        </button>
      </div>
    </div>
  );
};

export default AddAdsPage;
