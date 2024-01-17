"use client";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full h-24 z-10 bg-white">
        <div className="flex justify-between items-center h-full w-full px-10 2xl:px-16">
          <div>
            <Link href="/">
              <h1 className="text-[#0802A3] font-[700] text-[30px]">Hyra</h1>
            </Link>
          </div>
          <div>
            <ul
              className="items-center justify-between gap-10 hidden
                         sm:flex">
              <Link href="/">
                <li className="hover:border-b border-[#0802A3]">Home</li>
              </Link>

              <Link href="/">
                <li className="hover:border-b border-[#0802a3]">
                  Our Teachings
                </li>
              </Link>
              <Link href="/">
                <li className="hover:border-b border-[#0802A3]">About Us</li>
              </Link>
            </ul>
          </div>
          <div className="hidden sm:flex gap-6">
            <Button
              style="border-[#0802A3] border rounded-[8px] px-[10px] py-[8px] text-[#0802A3]"
              text="Sign Up"
            />
            <Button
              onClick={handleNav}
              style="bg-[#0802A3] border rounded-[8px] px-[15px]  py-[8px] text-white"
              text="Log In"
            />
          </div>
          <div onClick={handleNav} className="h-8 w-8 md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#000000">
              <path
                fillRule="evenodd"
                d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0
                                 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0
                                    011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div
          className={
            menuOpen
              ? " fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-slate-400 p-10 ease-in duration-500 "
              : " fixed left-[100%] top-0 p-10 ease-in duration-500"
          }></div>
      </nav>
    </>
  );
};

export default Navbar;
