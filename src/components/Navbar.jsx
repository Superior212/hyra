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

              <Link href="/teachings">
                <li className="hover:border-b border-[#0802a3]">
                  Our Teachings
                </li>
              </Link>
              <Link href="/about">
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
            {menuOpen ? (
              //  Cancel Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#000000">
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              //  Menu Icon
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
            )}
          </div>
        </div>
        <div
          className={
            menuOpen
              ? " fixed left-0 top-0 w-[65%] sm:hidden h-96 bg-[#71707C] p-10 ease-in duration-500 "
              : " fixed left-[100%] top-0 p-10 ease-in duration-500"
          }>
          <div className="flex flex-col justify-between h-fit w-full">
            <div className="flex flex-col gap-10 text-white text-center font-[500]">
              <Link href="/">
                <li className="list-none">Home</li>
              </Link>

              <Link href="/teachings">
                <li className="list-none">Our Teachings</li>
              </Link>
              <Link href="/about">
                <li className="list-none">About Us</li>
              </Link>
              <Link href="/">
                <li className="list-none">Sign Up</li>
              </Link>
              <Link href="/">
                <li className="list-none">Log In</li>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
