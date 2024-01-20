"use client";
import Image from "next/image";
import forgotImg from "../../../../assets/images/forgotImg.png";
import Button from "@/components/Button";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  return (
    <div className=" md:bg-white h-screen md:h-[75vh]">
      <main className="md:flex items-center justify-center ">
        <section className="md:mx-auto md:p-10 md:mr-4 ">
          <section className=" p-8 md:w-[26rem] bg-white">
            <h1 className="text-[20px] font-bold mb-6">Forgot Password?</h1>

            <form className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-gray-700">
                Enter your new Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="border border-[#FF7676] rounded-md p-2 mb-4 focus:outline-none focus:border border-[#FFCD4B]-[#FFCD4B] w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute top-[40%] right-2 transform -translate-y-1/2"
                  onClick={togglePasswordVisibility}>
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </button>
              </div>

              <label htmlFor="password" className="mb-2 text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="confirmPassword"
                  className="border border-[#FF7676] rounded-md p-2 mb-4 focus:outline-none focus:border border-[#FFCD4B]-[#FFCD4B] w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute top-[40%] right-2 transform -translate-y-1/2"
                  onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                </button>
              </div>

              <Button
                text="Send Code"
                style="bg-[#FF7676] text-white  rounded-md py-2 px-4 focus:outline-none focus:shadow-outline-blue"
              />
            </form>
          </section>
        </section>

        <section className="mx-auto p-4 pb-40">
          <Image
            src={forgotImg}
            alt="authImg"
            className="mt-28 hidden md:block"
          />
        </section>
      </main>
    </div>
  );
};

export default NewPassword;
