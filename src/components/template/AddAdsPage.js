"use client";

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import CustomDatePicker from "@/modules/AddAdsPage/CustomDatePicker";
import RadioList from "@/modules/AddAdsPage/RadioList";
import TextInputs from "@/modules/AddAdsPage/TextInputs";
import TextList from "@/modules/AddAdsPage/TextList";
import { ProgressBar } from "react-loader-spinner";
import { useRouter } from "next/navigation";

const AddAdsPage = ({ data }) => {
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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) setProfileData(data);
  }, []);

  const router = useRouter();

  const submitHandler = async () => {
    setLoading(true);

    const res = await fetch("/api/ads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    });
    const data = await res.json();

    setLoading(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true);

    const res = await fetch("/api/ads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profileData),
    });
    const data = await res.json();

    setLoading(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  return (
    <div className="w-full mb-7" id="ads">
      <h3 className="py-2 rounded-md bg-yellow-400 px-4">
        {data ? "ویرایش آگهی" : "ثبت آگهی جدید"}
      </h3>
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
        <CustomDatePicker
          profileData={profileData}
          setProfileData={setProfileData}
        />
        {loading ? (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperClass="progress-bar-wrapper"
            borderColor="#1d4ed8"
            barColor="#facc15"
            wrapperStyle={{ margin: "0 auto" }}
          />
        ) : data ? (
          <button
            onClick={editHandler}
            className="bg-blue-700 w-full py-2 rounded-md text-white font-semibold my-10"
          >
            ویرایش آگهی
          </button>
        ) : (
          <button
            onClick={submitHandler}
            className="bg-blue-700 w-full py-2 rounded-md text-white font-semibold my-10"
          >
            ثبت آگهی
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default AddAdsPage;
