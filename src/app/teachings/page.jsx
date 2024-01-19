import { TeachingDetails } from "../../components/constants";
import TeachingsCards from "@/components/TeachingsCards";

const Teachings = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center font-[700] text-[18px] md:text-[30px] mb-5">
        Our Teachings
      </h1>
      <div className="flex justify-center">
        <div className="md:grid grid-cols-2 gap-x-8">
          {TeachingDetails.map((cardData) => (
            <TeachingsCards
              key={cardData.id}
              imageUrl={cardData.imageUrl}
              title={cardData.title}
              description={cardData.description}
              id={cardData.id}
              style={cardData.style}
              cta={cardData.cta}
              titleStyle={cardData.titleStyle}
              ctaHref={cardData.ctaHref}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachings;
