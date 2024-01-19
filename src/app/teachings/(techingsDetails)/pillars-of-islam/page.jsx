import mosque from "../../../../assets/images/mosque.png";
import TeachingPage from "@/components/TeachingPage";

const Pillars = () => {
  const articlesOfFaithStyles = {
    containerClass: "p-4 md:h-[75vh]",
    titleClass: "text-center text-[#0802A3] font-bold text-2xl",
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
    mainTitle: "Pillars of Islam",
    title: "There are five pillars of Islam",
    imageSrc: mosque,
    content: "The Pillars of Islam are as follows",
    listItems: [
      "Shahadah",
      "Salat",
      "Zakat",
      "Sawn",
      "Hajj",
    ],
    ...articlesOfFaithStyles,
  };

  return <TeachingPage {...articlesOfFaithProps} />;
};

export default Pillars;
