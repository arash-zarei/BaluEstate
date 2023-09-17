import { p2e } from "@/utils/replaceNumber";
import React from "react";

const TextInputs = ({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) => {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mt-7">{title}</label>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
          className="border border-gray-400 rounded-md py-1 px-2 outline-none"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
          className="border border-gray-400 rounded-md py-1 px-2 outline-none"
        />
      )}
    </div>
  );
};

export default TextInputs;
