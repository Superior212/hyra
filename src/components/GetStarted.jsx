import Button from "./Button";
import arrow from "../assets/images/arrowPink.svg";
import getStarted from "../assets/images/GetStarted.png";
import Image from "next/image";
const GetStarted = () => {
  return (
    <div className="bg-[#FF4B91] text-white md:flex p-7 md:p-12 mt-8 items-center justify-center">
      <div className="md:w-1/2">
        <div className="flex items-center justify-center flex-col">
          <p className="md:w-[25rem] py-3 md:py-5   text-[20px] md:text-[30px]">
            The Prophet (S.A.W) said “Seeking knowledge is an obligation upon
            every Muslim”
          </p>
        </div>
        <Button
          text="Get Started with us"
          style="bg-white text-[#FF4B91] rounded-md px-6 py-3 flex gap-3 md:mt-3 mx-auto md:mx-36"
          image={arrow}
        />
      </div>
      <div className="md:w-1/2 flex items-center justify-center mt-5 md:mt-0">
        <Image
          className="w-full h-80 mx-40"
          src={getStarted}
          alt="Get Started"
        />
      </div>
    </div>
  );
};

export default GetStarted;
