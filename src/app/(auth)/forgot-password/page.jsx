"use client";
import Image from "next/image";
import forgotImg from "../../../assets/images/forgotImg.png";
import Button from "@/components/Button";


const ForgotPassword = () => {
  return (
    <div className=" md:bg-white h-screen md:h-[75vh]">
      <main className="md:flex items-center justify-center ">
        <section className="md:mx-auto md:p-10 md:mr-4 ">
          <section className=" p-8 md:w-[26rem] bg-white">
            <h1 className="text-[20px] font-bold mb-6">Forgot Password?</h1>

            <form className="flex flex-col">
              <label htmlFor="password" className="mb-2 text-gray-700">
                Enter your Email/Phone number
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="password"
                  className="border border-[#FF7676] rounded-md p-2 mb-4 focus:outline-none focus:border border-[#FFCD4B]-[#FFCD4B] w-full pr-10"
                />
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

export default ForgotPassword;
