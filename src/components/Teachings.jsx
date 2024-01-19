import Button from "./Button";
import TeachingCard from "./TeachingCard";
import arrow from "../assets/images/arrow.png";
import Link from "next/link";

const Teachings = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-[700] text-[28px]">Our Teachings</h1>

        <div className="flex flex-wrap justify-center mx-2 my-5 ">
          <TeachingCard
            title="Pillars of Islam"
            style="border-[#0802A3] mx-3 my-3 md:my-0  rounded-md border-[1px] h-48 w-40 md:w-80 flex items-center justify-center hover:bg-[#0802A3]"
            textStyle="text-center hover:text-white font-[700] text-[#4F0101]"
          />
          <TeachingCard
            title="Articles of Faith"
            style="border-[#0802A3] mx-3 my-4 md:my-0 rounded-md border-[1px] h-48 w-40 md:w-80 flex items-center justify-center hover:bg-[#FF7676]"
            textStyle="text-center hover:text-white font-[700] text-[#4F0101]"
          />
          <TeachingCard
            title="Stories of the Prophets"
            style="border-[#0802A3] mx-3  my-3 md:my-0 rounded-md border-[1px] h-48 w-40 md:w-80 flex items-center justify-center hover:bg-[#FF4B91]"
            textStyle="text-center hover:text-white font-[700] text-[#4F0101]"
          />
          <TeachingCard
            title="Stories of the Companions"
            style="lg:hidden block border-[#0802A3] mx-3  my-4 md:my-0 rounded-md border-[1px] h-48 w-40 md:w-80 flex items-center justify-center hover:bg-[#FFCD4B]"
            textStyle=" text-center hover:text-white font-[700] text-[#4F0101]"
          />
        </div>
        <div className="flex items-center justify-center ">
          <Link href="/teachings">
            <Button
              text="View all"
              style="bg-[#0802A3] text-white rounded-md px-12 py-3 flex gap-3 md:mt-3"
              image={arrow}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teachings;
