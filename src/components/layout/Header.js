"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ThreeDots } from "react-loader-spinner";
import { AiOutlineUser } from "react-icons/ai";

// Icons
import { FiLogIn } from "react-icons/fi";

const Header = () => {
  const { status } = useSession();

  return (
    <header className="w-full flex justify-between items-center p-4 my-3 rounded-md bg-blue-700">
      <div>
        <ul className="flex items-center gap-4">
          <li className="text-white">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="text-white">
            <Link href="/advertisements">آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div>
        {status === "loading" && (
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#facc15"
            ariaLabel="three-dots-loading"
          />
        )}
        {status === "unauthenticated" && (
          <Link
            href="/signin"
            className="flex items-center gap-1 bg-white rounded-md px-2"
          >
            <FiLogIn />
            <span>ورود</span>
          </Link>
        )}
        {status === "authenticated" && (
          <Link
            href="/dashboard"
            className="flex items-center gap-1 bg-yellow-400 p-1 rounded-md px-2"
          >
            <AiOutlineUser size={25} />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
