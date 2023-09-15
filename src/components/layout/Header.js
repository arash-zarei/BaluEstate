import Link from "next/link";
import React from "react";

// Icons
import { FiLogIn } from "react-icons/fi";

const Header = () => {
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
        <Link href="signin" className="flex items-center gap-1 bg-white rounded-md px-2">
          <FiLogIn />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
