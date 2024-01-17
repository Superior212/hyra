import React from "react";
import ChooseUsCard from "./ChooseUsCard";
import { ChooseUs } from "./constants";

const WhyUs = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-[700] text-[28px]">Why Choose Us</h1>

        <div className="flex flex-wrap justify-center">
          {ChooseUs.map((cardData, index) => (
            <ChooseUsCard key={index} {...cardData} style={cardData.style} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
