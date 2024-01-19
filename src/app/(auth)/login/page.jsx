"use client";
import Image from "next/image";
import authImg from "../../../assets/images/authImg.png";
import google from "../../../assets/images/google.png";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="bg-[#0802A3] md:bg-white">
      <h1 className="md:hidden text-center text-white p-10 font-[700] text-[20px]">
        Welcome!
      </h1>
      <main className="md:flex items-center justify-center ">
        <section className="md:mx-auto md:p-10 md:mr-4 ">
          <section className="rounded-t-[40px] md:rounded-[16px] border shadow-2xl p-8 md:w-[26rem] bg-white">
            <h1 className="text-2xl font-bold mb-6">Log in to your Account</h1>

            <form className="flex flex-col">
              <label htmlFor="username" className="mb-2 text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Aaisha"
                id="username"
                className="border border-[#0802A3] rounded-md p-2 mb-4 focus:outline-none focus:border border-[#FFCD4B]-[#FFCD4B]"
              />

              <label htmlFor="password" className="mb-2 text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="********"
                  className="border border-[#0802A3] rounded-md p-2 mb-4 focus:outline-none focus:border border-[#FFCD4B]-[#FFCD4B] w-full pr-10"
                />

                <button
                  type="button"
                  className="absolute top-[40%] right-2 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </button>
              </div>
              <div className="flex justify-between mt-6 mb-6">
                <div>
                  <input
                    className="mx-2"
                    type="checkbox"
                    name="RememberMe"
                    id="RememberMe"
                  />
                  <label htmlFor=" RememberMe">Remember me</label>
                </div>
                <Link href="/forgot-password" className="mr-10">
                  Forgot Password?
                </Link>
              </div>
              <Button
                text="Log In"
                style="bg-[#0802A3] text-white  rounded-md py-2 px-4 focus:outline-none focus:shadow-outline-blue"
              />

              <div className="flex justify-between mt-8 mb-8">
                <p>Don’t have an account?</p>
                <Link href="/register" className="text-[#0802A3]">
                  Sign Up
                </Link>
              </div>
            </form>
          </section>
        </section>

        <section className="mx-auto p-4 pb-40">
          <Image src={authImg} alt="authImg" className="hidden md:block" />
        </section>
      </main>
    </div>
  );
};

export default Login;
