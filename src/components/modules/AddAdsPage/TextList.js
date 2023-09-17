import React from "react";

// Icons
import { BiAddToQueue, BiTrashAlt } from "react-icons/bi";

const TextList = ({ title, profileData, setProfileData, type }) => {
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <div className="w-full my-10 border py-4 px-6 rounded-md">
      <p>{title}</p>
      {profileData[type].map((i, index) => (
        <div key={index} className="flex items-center gap-3 mt-3">
          <input
            type="text"
            className="border border-gray-400 rounded-md outline-none py-1 px-2"
            value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button
            onClick={() => deleteHandler(index)}
            className="flex items-center py-1 px-2 rounded-md border border-red-600 text-red-600"
          >
            حدف <BiTrashAlt />
          </button>
        </div>
      ))}
      <button
        onClick={addHandler}
        className="flex items-center gap-2 px-2 py-1 rounded-md text-white mt-5 bg-blue-700"
      >
        افرودن <BiAddToQueue />
      </button>
    </div>
  );
};

export default TextList;
