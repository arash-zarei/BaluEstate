import React from "react";

const RadioList = ({ profileData, setProfileData }) => {

  const { category } = profileData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="w-full mt-10">
      <p>دسته بندی</p>
      <div className="flex items-center gap-14 mt-4">
        <div className="py-1 px-3 rounded-md bg-yellow-400 text-black flex items-center gap-3">
          <label className="cursor-pointer" htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            value="villa"
            id="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div className="py-1 px-3 rounded-md bg-yellow-400 text-black flex items-center gap-3">
          <label className="cursor-pointer" htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            value="apartment"
            id="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div className="py-1 px-3 rounded-md bg-yellow-400 text-black flex items-center gap-3">
          <label className="cursor-pointer" htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div className="py-1 px-3 rounded-md bg-yellow-400 text-black flex items-center gap-3">
          <label className="cursor-pointer" htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioList;
