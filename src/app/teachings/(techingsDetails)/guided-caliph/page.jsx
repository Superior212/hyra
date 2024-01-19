import TeachingPage from "@/components/TeachingPage";
import caliph from "../../../../assets/images/caliph.png";

const GuidedCaliph = () => {
  const articlesOfFaithStyles = {
    containerClass: "p-4 md:h-[75vh]",
    titleClass: "text-center text-[#FFCD4B] font-bold text-2xl",
    contentClass: "mt-4 mx-60",
    subtitleClass: "text-[#0802A3] font-semibold text-lg ",
    paragraphClass: "mt-2 md:mt-5 ",
    listClass: "list-inside list-decimal mt-4 pl-4",
    listItemClass: "mb-2",
    imageClass: "md:w-96 md:h-fit md:mx-0",
    imageContainer:
      "md:flex items-center justify-center md:p-20 p-10 md:mt-0 mt-5",
  };

  const articlesOfFaithProps = {
    mainTitle: "The Four Rightly Guided Caliph",
    title: "",
    imageSrc: caliph,
    content:
      "The four rightly guided caliphs, also known as the Khulafa Rashidun, are considered to be the first four leaders of the Islamic community after the death of Prophet Muhammad. They are : ",
    listItems: [
      "Abubakr as-Siddiq",
      "Umar ibn al-Khattab",
      "Uthman ibn Affan",
      "Ali ibn Abi Talib",
    ],
    ...articlesOfFaithStyles,
  };

  return <TeachingPage {...articlesOfFaithProps} />;
};

export default GuidedCaliph;
