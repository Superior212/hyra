import { images } from "./constants";

const Description = ({ activeImage }) => {
  return (
    <div className="grid place-items-start w-full relative md:rounded-3xl md:rounded-br-3xl">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[50vh] py-5 md:pt-5 md:px-20 px-10 text-left"
              : "hidden"
          }`}>
          <div className="text-[#121214] text-[38px] md:w-[26rem] font-[700] md:mt-3">
            {elem.title}
          </div>
          <div className="text-[#464647] text-[20px] px-0 md:w-[21rem] font-[400] py-3 md:py-4 md:mt-4">
            {elem.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
