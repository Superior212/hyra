"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "./constants";
import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage === images.length - 1 ? 0 : prevActiveImage + 1
    );
  };
  const clickPrev = () => {
    setActiveImage((prevActiveImage) =>
      prevActiveImage === 0 ? images.length - 1 : prevActiveImage - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl ">
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
      <div
        className={`w-full flex justify-center items-center md:gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}>
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-fit rounded-lg h-[50vh] mt-[3rem] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}>
            <Image
              src={elem.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-[40vh] object-cover rounded-xl  md:rounded-xl"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Slider;
