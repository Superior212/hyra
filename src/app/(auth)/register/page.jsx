"use client";
import Image from "next/image";
import authImg from "../../../assets/images/authImg.png";
import google from "../../../assets/images/google.png";
import Button from "@/components/Button";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
const Register = () => {
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
    <div className="bg-[#FFCD4B] md:bg-white">
      <h1 className="md:hidden text-center  p-10 font-[700] text-[20px]">
        Hello!
      </h1>
      <main className="md:flex items-center justify-center">
        <section className="md:mx-auto md:p-10 md:mr-4">
          <section className="rounded-t-[40px] md:rounded-[16px] border shadow-2xl p-8 md:w-[26rem] bg-white">
            <h1 className="text-2xl font-bold mb-6 pl-6 md:pl-0 md:pt-0 pt-4">
              Create an Account
            </h1>

            <form className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-gray-700">
                Name
              </label>
              <input
                placeholder="Aaisha"
                type="text"
                id="name"
                className="border border-[#FFCD4B] rounded-md p-2 mb-4 focus:outline-none focus:border border-[#FFCD4B]-[#FFCD4B]"
              />

              <label htmlFor="emailPhone" className="mb-2 text-gray-700">
                Email/Phone Number
              </label>
              <input
                type="text"
                placeholder="aaisha@gmail.com"
                id="emailPhone"
                className="border border-[#FFCD4B] rounded-md p-2 mb-4 focus:outline-none focus:border border-[#FFCD4B]-[#FFCD4B]"
              />

              <label htmlFor="username" className="mb-2 text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Aaisha"
                id="username"
                className="border border-[#FFCD4B] rounded-md p-2 mb-4 focus:outline-none focus:border border-[#FFCD4B]-[#FFCD4B]"
              />

              <div>
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
                    className="border border-[#FFCD4B] rounded-md p-2 mb-4 focus:outline-none focus:border border-[#FFCD4B]-[#FFCD4B] w-full pr-10"
                  />

                  <button
                    type="button"
                    className="absolute top-[40%] right-2 transform -translate-y-1/2"
                    onClick={togglePasswordVisibility}>
                    {showPassword ? <BsEyeSlash /> : <BsEye />}
                  </button>
                </div>

                <label htmlFor="confirmPassword" className="mb-2 text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="confirmPassword"
                    placeholder="********"
                    className="border border-[#FFCD4B] rounded-md p-2 mb-4 focus:outline-none focus:border border-[#FFCD4B]-[#FFCD4B] w-full pr-10"
                  />

                  <button
                    type="button"
                    className="absolute top-[40%] right-2 transform -translate-y-1/2"
                    onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                  </button>
                </div>
              </div>

              <Button
                text=" Sign Up"
                style="bg-[#FFCD4B]  rounded-md py-2 px-4 focus:outline-none focus:shadow-outline-blue"
              />

              <Button
                image={google}
                text="Continue with google"
                style="border border-[#FFCD4B] rounded-md flex flex-row-reverse items-center justify-center py-2 mt-5 px-4 focus:outline-none focus:shadow-outline-blue"
              />
            </form>
          </section>
        </section>

        <section className="md:mx-auto p-4 pb-40">
          <Image src={authImg} alt="authImg" className="hidden md:block" />
        </section>
      </main>
    </div>
  );
};

export default Register;
