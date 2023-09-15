import React from "react";

const Form = ({ title, email, password, changeHandler }) => {
  return (
    <div className="w-full mt-5 flex flex-col gap-5">
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-500">
          ایمیل
        </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
          className="px- outline-none border-black border-b-2"
        />
      </div>
      <div className="flex flex-col mt-5">
        <label htmlFor="password" className="text-gray-500">
          رمز عبور
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          className="px- outline-none border-black border-b-2"
        />
      </div>
      <button className="py-1 px-7 bg-green-600 text-black rounded-md">
        {title}
      </button>
    </div>
  );
};

export default Form;
