"use client";

import React, { useEffect, useState } from "react";
import { GoShare } from "react-icons/go";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

const ShareButton = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div className="bg-white flex items-center shadow-xl p-2 rounded-lg mt-7">
        <button onClick={() => toast.success("url کپی شد.")} className="w-full flex justify-center gap-3 hover:text-blue-800">
          <GoShare />
          اشتراک گذاری
        </button>
      </div>
    </CopyToClipboard>
  );
};

export default ShareButton;
