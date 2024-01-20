"use client";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Teachings",
      link: "/teachings",
    },
    {
      name: "About Us",
      link: "/about",
    },
  ];

  const mobileNavLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Teachings",
      link: "/teachings",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Sign Up",
      link: "/register",
    },
    {
      name: "Log In",
      link: "/login",
    },
  ];

  const shouldRenderNavbar =
    pathname !== "/register" &&
    pathname !== "/login" &&
    pathname !== "/forgot-password" &&
    pathname !== "/forgot-password/new-password" &&
    pathname !== "/forgot-password/reset-password";

  return shouldRenderNavbar ? (
    <>
      <nav className="fixed top-0 w-full h-24 z-10 bg-white">
        <div className="flex justify-between items-center h-full w-full px-10 2xl:px-16">
          <div>
            <Link href="/">
              <h1 className="text-[#0802A3] font-[700] text-[30px]">Hyra</h1>
            </Link>
          </div>
          <div>
            <div className="sm:flex hidden items-center  justify-between gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.link;
                return (
                  <Link
                    className={
                      isActive ? "text-[#0802A3] mr-3" : "text-black mr-5"
                    }
                    key={link.name}
                    href={link.link}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden sm:flex gap-6">
            <Link href="/register">
              <Button
                style="border-[#0802A3] border rounded-[8px] px-[10px] py-[8px] text-[#0802A3]"
                text="Sign Up"
              />
            </Link>
            <Link href="/login">
              <Button
                style="bg-[#0802A3] border rounded-[8px] px-[15px]  py-[8px] text-white"
                text="Log In"
              />
            </Link>
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
        {/* mobileNav */}
        <div
          className={
            menuOpen
              ? " fixed left-0 top-0 w-[65%] sm:hidden h-96 bg-[#71707C] p-10 ease-in duration-500 "
              : " fixed left-[100%] top-0 p-10 ease-in duration-500"
          }>
          <div className="flex flex-col justify-between h-fit w-full">
            <div className="flex flex-col gap-10 text-white text-center font-[500]">
              {mobileNavLinks.map((link) => (
                <Link key={link.name} href={link.link}>
                  <div
                    onClick={closeMobileMenu}
                    className="list-none cursor-pointer">
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  ) : null;
};

export default Navbar;
