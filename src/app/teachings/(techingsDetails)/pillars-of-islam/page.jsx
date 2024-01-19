import Image from "next/image";
import mosque from "../../../../assets/images/mosque.png";

const Pillars = () => {
  return (
    <div className="md:h-[75vh]">
      <h1 className="text-center text-[#0802A3] font-[700] text-[25px]">
        Pillars of Islam
      </h1>
      <div className="md:flex items-center justify-center md:p-20 p-10 md:mt-0 mt-5">
        <div className="md:w-1/2 md:order-2">
          <Image
            src={mosque}
            className="md:w-96 md:h-fit md:mx-auto"
            alt="mosque"
          />
        </div>
        <div className="md:w-1/2 md:order-1 md:ml-5 md:mt-0 mt-10 pb-12">
          <div className="md:mx-48">
            <h2 className="text-[#0802A3] font-[600] text-[20px]">
              There are five pillars of Islam
            </h2>
            <p className="md:mt-5">The Pillars of Islam are as follows</p>
            <ol className="list-decimal pl-4 mt-4 ">
              <li className="mb-2">Shahadah</li>
              <li className="mb-2">Salat</li>
              <li className="mb-2">Zakat</li>
              <li className="mb-2">Sawn</li>
              <li className="mb-2">Hajj</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pillars;
